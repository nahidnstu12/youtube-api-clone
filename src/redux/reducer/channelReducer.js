import * as types from "../actionTypes";
import initialState from "./initialState";

const channelReducer = (state = initialState.channelDetails, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.CHANNEL_SUCCESS:
      return {
        ...state,
        loading: false,
        channel: payload,
      };
    case types.SET_SUBSCRIPTION_STATUS:
      return {
        ...state,
        loading: false,
        CheckSubscription: payload,
      };

    case types.CHANNEL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default channelReducer;
