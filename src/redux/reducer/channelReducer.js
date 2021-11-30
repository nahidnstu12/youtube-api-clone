import * as Actions from "../actionTypes";
import initialState from "./initialState";

const channelReducer = (state = initialState.channelDetails, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Actions.CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        channel: payload,
      };
    case Actions.SET_SUBSCRIPTION_STATUS:
      return {
        ...state,
        loading: false,
        CheckSubscription: payload,
      };

    case Actions.CHANNEL_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case Actions.SUBSCRIPTIONS_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.SUBSCRIPTIONS_CHANNEL_SUCCESS:
      return {
        ...state,
        channelLists: payload,
        loading: false,
      };
    case Actions.SUBSCRIPTIONS_CHANNEL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Actions.CHANNEL_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.CHANNEL_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case Actions.CHANNEL_VIDEOS_FAIL:
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
