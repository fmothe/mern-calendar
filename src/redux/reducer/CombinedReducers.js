import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";

export const CombinedReducers = combineReducers({
  ui: uiReducer,
});
