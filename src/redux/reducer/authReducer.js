import * as types from "../actionTypes";
import initialState from "./initialState";

 const authReducer = (state = initialState.auth, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: payload,
      };

    case types.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        accessToken: null,
        error: payload,
      };

    case types.LOAD_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case types.LOG_OUT:
      return {
        ...state,
        accessToken: null,
        profile: null,
      };

    default:
      return state;
  }
};

export default authReducer;
