import { GET_ALL_USERS } from "../types";

let initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return (state = action.payload);
    default:
      return state;
  }
};
