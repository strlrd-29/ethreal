import { GET_TYPES } from "../types";
const initialState = [];

export const typesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return action.payload;
    default:
      return state;
  }
};
