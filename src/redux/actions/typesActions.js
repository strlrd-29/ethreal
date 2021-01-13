import axios from "axios";
import { GET_TYPES, SET_ERRORS, LOADING_UI, END_LOADING } from "../types";

export const addType = (storeId, type) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/types/${storeId}/add`, type)
    .then(() => {
      dispatch(getTypes());
      dispatch({ type: END_LOADING });
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const editType = (typeId, updatedType) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/types/${typeId}/edit`, updatedType)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getTypes());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const deleteType = (typeId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .delete(`/types/${typeId}/delete`)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getTypes());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const getTypes = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/types")
    .then(({ data }) => {
      dispatch({ type: END_LOADING });
      dispatch({ type: GET_TYPES, payload: data });
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};
