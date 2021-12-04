import * as Actions from "../actionTypes";
import initialState from "./initialState";

const likedVideoReducer = (state = initialState.likedVideo, action) => {
  const { payload, type } = action;

  switch (type) {
    case Actions.GET_ALL_LIKED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.GET_ALL_LIKED_VIDEO_SUCCESS:
      return {
        ...state,
        likedvideos: payload,
        loading: false,
      };
    case Actions.GET_LIKED_VIDEO:
      return {
        ...state,
        rating: payload,
        // loading: false,
      };
    case Actions.GET_LIKED_VIDEO_FAIL:
      return {
        ...state,
        // loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default likedVideoReducer;
