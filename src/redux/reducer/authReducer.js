import React from "react";
import { types } from "../../types/types";

const initialState = {
    checking: true,
    // uid: null,
    // name: null
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_START:
            return {
                ...state,
                checking: false,
                ...action.payload,
            };
        case types.LOGIN_CHECKING_FINISH:
            return {
                ...state,
                checking: false,
            };
        case types.LOGOUT:
            return {
                checking: false
            }
        default:
            return state;
    }
};
