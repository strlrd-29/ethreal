import axios from "axios";
import { GET_STORES, SET_ERRORS, LOADING_UI, END_LOADING } from "../types";

export const addStore = (store) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`stores/add`, store)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getStores());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const editStore = (storeId, updatedStore) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/stores/${storeId}/edit`, updatedStore)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getStores());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const deleteStore = (storeId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .delete(`/stores/${storeId}/delete`)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getStores());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const getStores = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/stores")
    .then(({ data }) => {
      dispatch({ type: END_LOADING });
      dispatch({ type: GET_STORES, payload: data });
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};
