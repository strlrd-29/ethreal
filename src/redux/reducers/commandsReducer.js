import { GET_COMMANDS, GET_ALL_COMMANDS } from "../types";
const initialState = [];

export const commandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMANDS:
      return action.payload;
    case GET_ALL_COMMANDS:
      return action.payload;

    default:
      return state;
  }
};
