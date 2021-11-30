import request from "../../utils/axios";
import * as Actions from "../actionTypes";

export const getChannelByVideos = (channelId) => async (dispatch,getState) => {
  try {
    dispatch({
      type: Actions.CHANNEL_DETAILS_REQUEST,
    });

    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id: channelId,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    console.log(data);

    dispatch({
      type: Actions.CHANNEL_DETAILS_SUCCESS,
      payload: {
        ...data.items[0],
      },
    });
  } catch (error) {
    console.log("error " + error);
    dispatch({
      type: Actions.CHANNEL_DETAILS_FAIL,
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
      type: Actions.SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });
    // console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};
