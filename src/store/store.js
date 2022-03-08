import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CombinedReducers } from "../redux/reducer/CombinedReducers";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  CombinedReducers,
  composeEnhancers(applyMiddleware(thunk))
);
