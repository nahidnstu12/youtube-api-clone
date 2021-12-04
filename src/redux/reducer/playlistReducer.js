import initialState from "./initialState";
import * as Actions from "../actionTypes";

const playlistReducer = (
  state = initialState.playlists,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case Actions.PLAYLIST_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.PLAYLIST_VIDEOS_SUCCESS:
      return {
        ...state,
        playlist: payload,
        loading: false,
      };
    case Actions.PLAYLIST_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Actions.PLAYLIST_ALL_VIDEOS_SUCCESS:
      return {
        ...state,
        playlistVideos: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default playlistReducer;