import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducer/authReducer";
import { videosReducer } from "./reducer/videosReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos:videosReducer,
});

const compose = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, {}, compose);

export default store;
