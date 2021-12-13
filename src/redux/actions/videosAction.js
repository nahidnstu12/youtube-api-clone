import request from "../../utils/axios";

import * as Actions from "../actionTypes";

export const getPopularVideos = () => async (dispatch, getStatic) => {
  try {
    dispatch({
      type: Actions.HOME_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "BD",
        maxResults: 12,
        pageToken: getStatic().homeVideos.pageToken,
      },
      headers:{
        
      }
    });
    
    // console.log(data);
    dispatch({
      type: Actions.HOME_SUCCESS,
      payload: {
        videos: data.items,
        pageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log("error " + error);
    dispatch({
      type: Actions.HOME_FAILED,
      message: error.message,
    });
  }
};

export const getCategoricVideos = (keyword) => async (dispatch, getStatic) => {
  try {
    dispatch({
      type: Actions.HOME_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 4,
        pageToken: getStatic().homeVideos.pageToken,
        q: keyword,
        type: "video",
      },
    });
    // console.log(data);

    dispatch({
      type: Actions.HOME_SUCCESS,
      payload: {
        videos: [...data.items],
        pageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log("error " + error);
    dispatch({
      type: Actions.HOME_FAILED,
      message: error.message,
    });
  }
};

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Actions.RELATED_VIDEO_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 4,
        type: "video",
      },
    });
    dispatch({
      type: Actions.RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: Actions.RELATED_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: Actions.SEARCHED_VIDEO_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 4,
        q: keyword,
        type: "video,channel",
      },
    });

    dispatch({
      type: Actions.SEARCHED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: Actions.SEARCHED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getSubscribedChannels = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Actions.SUBSCRIPTIONS_CHANNEL_REQUEST,
    });
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet,contentDetails",

        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: Actions.SUBSCRIPTIONS_CHANNEL_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response?.data?.error);
    dispatch({
      type: Actions.SUBSCRIPTIONS_CHANNEL_FAIL,
      payload: error.response?.data?.error,
    });
  }
};

export const getVideosByChannel = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Actions.CHANNEL_VIDEOS_REQUEST,
    });

    // 1. get upload playlist id
    const {
      data: { items },
    } = await request("/channels", {
      params: {
        part: "contentDetails",
        id: id,
      },
    });
    const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;
    // 2. get the videos using the id
    const { data } = await request("/playlistItems", {
      params: {
        part: "snippet,contentDetails",
        playlistId: uploadPlaylistId,
        maxResults: 5,
      },
    });

    dispatch({
      type: Actions.CHANNEL_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: Actions.CHANNEL_VIDEOS_FAIL,
      payload: error.response,
    });
  }
};
