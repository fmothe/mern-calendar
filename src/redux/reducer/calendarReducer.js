import { types } from "../../types/types";

import moment from "moment";

const initialState = {
  events: [
    // {
    //   id: new Date().getTime(),
    //   title: "Que miras",
    //   start: moment().toDate(),
    //   end: moment().add(2, "hours").toDate(),
    //   user: {
    //     _id: "123",
    //     name: "Federico",
    //   },
    // },
  ],
  active: null,
};


export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EVENT_ADD_NEW:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.EVENT_SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case types.EVENT_CLEAR_ACTIVE:
      return {
        ...state,
        active: null,
      };
    case types.EVENT_UPDATE:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case types.EVENT_DELETE:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.active.id),
        active: null,
      };
    case types.EVENT_LOAD_ALL:
      return {
        ...state,
        events: [...action.payload],
      }
    case types.EVENT_LOGOUT:
      return{
        ...initialState,
      }
    default:
      return state;
  }
};
