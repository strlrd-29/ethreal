import {
  SET_USER,
  SET_WEBSITE,
  SET_AUTHONTICATED,
  SET_UNAUTHONTIFICATED,
  SET_AUTHENTICATED_ADMIN,
  SET_UNAUTHENTICATED_ADMIN,
} from "../types";

const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        authonticated: true,
      };
    case SET_AUTHONTICATED:
      return {
        ...state,

        authonticated: true,
      };
    case SET_AUTHENTICATED_ADMIN:
      return {
        ...state,
        authenticatedAdmin: true,
      };
    case SET_UNAUTHENTICATED_ADMIN:
      return {
        ...state,
        authenticatedAdmin: false,
      };

    case SET_UNAUTHONTIFICATED:
      return {
        ...state,
        user: {},
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
