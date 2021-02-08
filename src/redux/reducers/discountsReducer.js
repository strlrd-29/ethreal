import { GET_ALL_DISCOUNTS } from "../types";

let initialState = [];

export const discountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DISCOUNTS:
      return (state = action.payload);
    default:
      return state;
  }
};
