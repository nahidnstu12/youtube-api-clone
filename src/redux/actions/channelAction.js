import request from "../../utils/axios";
import {
  CHANNEL_FAILED,
  CHANNEL_REQUEST,
  CHANNEL_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
} from "../actionTypes";

export const getChannelByVideos = (channelId) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_REQUEST,
    });

    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics",
        id: channelId,
      },
    });
    // console.log(data);

    dispatch({
      type: CHANNEL_SUCCESS,
      payload: {
        ...data.items[0],
      },
    });
  } catch (error) {
    console.log("error " + error);
    dispatch({
      type: CHANNEL_FAILED,
      message: error.message,
    });
  }
};

export const checkSubscriptionStatus = (channelId) => async (dispatch, getState) => {
  try {
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: channelId,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });
    // console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};
