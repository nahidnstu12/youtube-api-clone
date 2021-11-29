import request from "../../utils/axios";
import { HOME_FAILED, HOME_REQUEST, HOME_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS } from "../actionTypes";

export const getPopularVideos = () => async (dispatch, getStatic) => {
  try {
    dispatch({
      type: HOME_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "BD",
        maxResults: 12,
        pageToken: getStatic().homeVideos.pageToken,
      },
    });
    // console.log(data);

    dispatch({
      type: HOME_SUCCESS,
      payload: {
        videos: data.items,
        pageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log("error " + error);
    dispatch({
      type: HOME_FAILED,
      message: error.message,
    });
  }
};

export const getCategoricVideos = (keyword) => async (dispatch, getStatic) => {
  try {
    dispatch({
      type: HOME_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 12,
        pageToken: getStatic().homeVideos.pageToken,
        q: keyword,
        type: "video",
      },
    });
    // console.log(data);

    dispatch({
      type: HOME_SUCCESS,
      payload: {
        videos: [...data.items],
        pageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log("error " + error);
    dispatch({
      type: HOME_FAILED,
      message: error.message,
    });
  }
};

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });
    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: RELATED_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
};