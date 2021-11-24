import { combineReducers } from "redux";
import auth from "./authReducer";
import homeVideos from "./videosReducer";

export default combineReducers({
  auth,
  homeVideos,
});
