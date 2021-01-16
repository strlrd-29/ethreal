import {
  SET_USER,
  SET_WEBSITE,
  SET_AUTHONTICATED,
  SET_UNAUTHONTIFICATED,
} from "../types";

const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_AUTHONTICATED:
      return {
        ...state,
        authonticated: true,
      };

    case SET_UNAUTHONTIFICATED:
      return {
        ...state,
        authonticated: false,
      };
    case SET_WEBSITE:
      return {
        ...state,
        website: action.payload,
      };
    default:
      return state;
  }
};
