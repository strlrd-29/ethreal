import {
  ADD_TO_CART,
  ADD_QUANTITY,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from "../types";
const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { item: action.payload, quantity: action.quantity }];
    case ADD_QUANTITY:
      return state.map((item) =>
        item.item.title === action.payload.title
          ? {
              ...item,
              quantity: action.quantity
                ? item.quantity + action.quantity
                : item.quantity + 1,
            }
          : item
      );
    case DECREASE_QUANTITY:
      return state.map((item) =>
        item.item.title === action.payload.item.title
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    // case EDIT_QUANTITY:
    //   return state.map((item) =>
    //     item.item.title === action.payload.title
    //       ? { ...item, quantity: action.quantity }
    //       : item
    //   );
    case REMOVE_ITEM:
      return state.filter((item) => item.item.title !== action.payload);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};
