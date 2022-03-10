import { types } from "../../types/types";

export const addNewEventAction = (event) => ({
  type: types.EVENT_ADD_NEW,
  payload: event,
});

export const setActiveAction = (event) => ({
  type: types.EVENT_SET_ACTIVE,
  payload: event,
});

export const clearActiveEventAction = () => ({
  type: types.EVENT_CLEAR_ACTIVE,
});

export const eventUpdateAction = (event) => ({
  type: types.EVENT_UPDATE,
  payload: event,
});

export const eventDeleteAction = () => ({
  type: types.EVENT_DELETE
})
