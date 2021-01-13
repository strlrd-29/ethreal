import axios from "axios";
import { GET_ITEMS, SET_ERRORS, LOADING_UI, END_LOADING } from "../types";

export const addItem = (typeId, item) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/items/${typeId}/add`, item)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getItems());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const editItem = (itemId, item) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/items/${itemId}/edit`, item)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getItems());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const deleteItem = (itemId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .delete(`/items/${itemId}/delete`)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getItems());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const getItems = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/items")
    .then(({ data }) => {
      dispatch({ type: END_LOADING });
      dispatch({ type: GET_ITEMS, payload: data });
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};
