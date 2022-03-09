import { combineReducers } from "redux";
import { calendarReducer } from "./calendaReducer";
import { uiReducer } from "./uiReducer";

export const CombinedReducers = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
});
