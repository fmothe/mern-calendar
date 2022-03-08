import { types } from "../../types/types";

const initialState = {
  modalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { 
          ...state,
         modalOpen: true };
    case types.CLOSE_MODAL:
      return {
          ...state,
          modalOpen: false,
      };
    default:
      return state;
  }
};
