import request from "../../utils/axios";
import * as Actions from "../actionTypes";

export const getMyPlaylist = () => async (dispatch,getState) => {
  try {
    dispatch({
      type: Actions.PLAYLIST_VIDEOS_REQUEST,
    });

    const { data } = await request("/playlists", {
      params: {
        part: "snippet,contentDetails",
        mine: true,
        maxResults: 5,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: Actions.PLAYLIST_VIDEOS_SUCCESS,
      payload: data.items,
    });
    
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: Actions.PLAYLIST_VIDEOS_FAIL,
      payload: error.response.data,
    });
  }
};

export const getVideosMyPlaylist = (playlistId) => async (dispatch,getState) => {
  try {
    dispatch({
      type: Actions.PLAYLIST_VIDEOS_REQUEST,
    });

    // 1. get upload playlist id
    // const {
    //   data: { items },
    // } = await request("/channels", {
    //   params: {
    //     part: "contentDetails",
    //     id: id,
    //   },
    // });
    // const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;

    // 2. get the videos using the id
    const { data } = await request("/playlistItems", {
      params: {
        part: "snippet,contentDetails",
        playlistId,
        maxResults: 5,
      },
    });

    dispatch({
      type: Actions.PLAYLIST_ALL_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: Actions.PLAYLIST_VIDEOS_FAIL,
      payload: error.response,
    });
  }
};
