import { SET_USER, SET_WEBSITE } from "../types";

const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
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
