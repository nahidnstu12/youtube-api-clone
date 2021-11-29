import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import initialState from "./reducer/initialState";
import rootReducer from "./reducer";

const makeStore = () => {
  console.log(initialState);
  const composeEnhancers =
    process.env.NODE_ENV !== "production" ? composeWithDevTools : compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default createWrapper(makeStore, { debug: true });
