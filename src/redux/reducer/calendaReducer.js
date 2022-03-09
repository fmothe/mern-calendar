import { types } from "../../types/types";

import moment from "moment";

const initialState = {
  events: [
    {
      title: "Que miras",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      user: {
        _id: "123",
        name: "Federico",
      },
    },
  ],
  active: null,
};
export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EVENT_ADD_NEW:
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case types.EVENT_SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case types.EVENT_UPDATE:
      return {};
    case types.EVENT_DELETE:
      return {};

    default:
      return state;
  }
};
