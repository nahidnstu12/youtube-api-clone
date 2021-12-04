import { combineReducers } from "redux";
import auth from "./authReducer";
import homeVideos from "./videosReducer";
import channelDetails from "./channelReducer"
import commentList from "./commentReducer"
import relatedVideo from "./relatedVideoReducer"
import searchResults from "./searchVideoReducer";
import likedVideo from "./likedVideoReducer";
import playlists from "./playlistReducer";

export default combineReducers({
  auth,
  homeVideos,
  channelDetails,
  commentList,
  relatedVideo,
  searchResults,
  likedVideo,
  playlists
});
