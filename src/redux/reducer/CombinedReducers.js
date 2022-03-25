import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { calendarReducer } from "./calendaReducer";
import { uiReducer } from "./uiReducer";

export const CombinedReducers = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  auth: authReducer
});
