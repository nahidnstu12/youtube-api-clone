import initialState from "./initialState";
import * as Actions from "../actionTypes"

export const subscriptionsChannelReducer = (
  state = initialState.channelDetails,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case Actions.SUBSCRIPTIONS_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.SUBSCRIPTIONS_CHANNEL_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case Actions.SUBSCRIPTIONS_CHANNEL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
