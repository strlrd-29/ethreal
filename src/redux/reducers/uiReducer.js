import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, END_LOADING } from "../types";
const initialState = {
  loading: false,
  errors: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        errors: null,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    default: {
      return state;
    }
  }
};
