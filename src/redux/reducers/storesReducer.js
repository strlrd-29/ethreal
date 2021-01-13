import { GET_STORES } from "../types";

const initialState = [];

export const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORES:
      return action.payload;
    default:
      return state;
  }
};
