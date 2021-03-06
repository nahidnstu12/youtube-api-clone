import * as types from "../actionTypes";

const initailState = {
  videos: [],
  pageToken: null,
  loading: false,
  activeCategory: "All",
};

export const videosReducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        pageToken: payload.pageToken,
        activeCategory: payload.category,
      };

    case types.HOME_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
