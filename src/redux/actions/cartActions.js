import {
  ADD_TO_CART,
  ADD_QUANTITY,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
} from "../types";
import store from "../store";

export const addToCart = (item, quantity = 1) => (dispatch) => {
  const cart = store.getState().cart;
  //check if item already exists in cart
  if (!cart.find((product) => product.item.title === item.title)) {
    dispatch({ type: ADD_TO_CART, payload: item, quantity });
  } else {
    dispatch({ type: ADD_QUANTITY, payload: item, quantity: quantity });
  }
};
export const decreaseQuantity = (item) => (dispatch) => {
  if (item.quantity === 1) {
    dispatch(removeItem(item.item.title));
  } else {
    dispatch({ type: DECREASE_QUANTITY, payload: item });
  }
};
export const removeItem = (title) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM, payload: title });
};
