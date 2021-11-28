import { combineReducers } from "redux";
import auth from "./authReducer";
import homeVideos from "./videosReducer";
import channelDetails from "./channelReducer"

export default combineReducers({
  auth,
  homeVideos,
  channelDetails,
});
