import request from "../../utils/axios";
import { HOME_FAILED, HOME_REQUEST, HOME_SUCCESS } from "../actionTypes";

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
        maxResults: 20,
        pageToken: getStatic().homeVideos.pageToken,
      },
    });
    console.log(data)

    dispatch({
      type: HOME_SUCCESS,
      payload: {
        videos: data.items,
        pageToken: data.nextPageToken,
        category: 'All'
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
        maxResults: 20,
        pageToken: getStatic().homeVideos.pageToken,
        q: keyword,
        type: "video",
      },
    });
    console.log(data);

    dispatch({
      type: HOME_SUCCESS,
      payload: {
        videos: data.items,
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
