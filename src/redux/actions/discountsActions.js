import axios from "axios";
import {
  END_LOADING,
  GET_ALL_DISCOUNTS,
  LOADING_UI,
  SET_ERRORS,
} from "../types";

export const getAllDiscounts = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/discounts")
    .then(({ data, message }) => {
      if (message) {
        dispatch({ type: SET_ERRORS, payload: message });
      } else {
        dispatch({ type: END_LOADING });
        dispatch({ type: GET_ALL_DISCOUNTS, payload: data });
      }
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err });
    });
};

export const addCodeDiscount = (codeDiscount) => (dispatch) => {
  axios
    .post("/discount/code", codeDiscount)
    .then(() => {
      dispatch(getAllDiscounts());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const addAutoDiscount = (autoDiscount) => (dispatch) => {
  axios
    .post("/discount/code", autoDiscount)
    .then(() => {
      dispatch(getAllDiscounts());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const deleteCodeDiscount = (discount) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .delete("/dicount/code/remove", discount)
    .then(() => {
      dispatch({ type: END_LOADING });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.message });
    });
};

export const deleteAutoDiscount = (discount) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .delete("/dicount/auto/remove", discount)
    .then(() => {
      dispatch({ type: END_LOADING });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.message });
    });
};
