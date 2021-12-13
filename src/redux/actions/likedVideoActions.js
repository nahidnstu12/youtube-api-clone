import request from "../../utils/axios";
import * as Actions from "../actionTypes";

export const getLikedVideo =
  (videoId) => async (dispatch, getState) => {
    try {
      const { data } = await request("videos/getRating", {
        params: {
          id: videoId,
        },
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      });
      dispatch({
        type: Actions.GET_LIKED_VIDEO,
        payload: data.items[0].rating,
      });
      // console.log(data);
    } catch (error) {
      console.log(error.response.data.error);
      dispatch({
        type: Actions.GET_LIKED_VIDEO_FAIL,
        payload: error.response?.data?.error,
      });
    }
  };

export const getAllLikedVideos = () => async (dispatch,getState) => {
  try {
    dispatch({
      type: Actions.GET_ALL_LIKED_VIDEO_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet",
        myRating: "like",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: Actions.GET_ALL_LIKED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: Actions.GET_LIKED_VIDEO_FAIL,
      payload: error.response.data,
    });
  }
};

export const addRating = (id, rating) => async (dispatch, getState) => {
  try {
    const obj = {
      id,
      rating,
    };

    await request.post("videos/rate", obj, {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: Actions.ADDING_RATE_SUCCESS,
    });

    setTimeout(() => dispatch(getLikedVideo(id)), 2000);
  } catch (error) {
    console.log(error);
    dispatch({
      type: Actions.ADDING_RATE_FAIL,
      // payload: error.response.data.message,
    });
  }
};
