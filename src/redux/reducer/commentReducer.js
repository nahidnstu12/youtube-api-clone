import * as types from "../actionTypes";
import initialState from "./initialState";

const commentReducer = (state = initialState.commentList, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: payload,
      };
   

    case types.COMMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default commentReducer;
