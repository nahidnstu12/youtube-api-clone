import { YTC_ACESS_TOKEN, YTC_PROFILE } from "../../utils/contsants";
import * as types from "../actionTypes";

const initailState = {
  accessToken: sessionStorage.getItem(YTC_ACESS_TOKEN) || null,
  profile: JSON.parse(sessionStorage.getItem(YTC_PROFILE)) || null,
  loading: false,
};

export const authReducer = (state = initailState, action) => {
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
