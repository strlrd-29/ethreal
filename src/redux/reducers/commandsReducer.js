import { GET_COMMANDS, GET_ALL_COMMANDS, DELETE_COMMANDS } from "../types";
const initialState = [];

export const commandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMANDS:
      return [...state, action.payload];
    case GET_ALL_COMMANDS:
      return [...state, action.payload];
    case DELETE_COMMANDS:
      return [];
    default:
      return state;
  }
};
