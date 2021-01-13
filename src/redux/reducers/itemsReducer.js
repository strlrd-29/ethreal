import { GET_ITEMS } from "../types";
const initialState = [];

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.payload;
    default:
      return state;
  }
};
