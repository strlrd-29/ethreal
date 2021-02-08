import axios from "axios";
import { GET_ALL_USERS, LOADING_UI, END_LOADING, SET_ERRORS } from "../types";

export const getAllUsers = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/users/all")
    .then(({ data, message }) => {
      // dispatch({ type: GET_ALL_USERS, payload: data });
      if (message) {
        dispatch({ type: SET_ERRORS, payload: message });
      } else {
        dispatch({ type: END_LOADING });
        dispatch({ type: GET_ALL_USERS, payload: data });
      }
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.message });
    });
};

export const banUser = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.get(`/users/${userHandle}/banne`).then(({ message }) => {
    dispatch({ type: END_LOADING });
    dispatch(getAllUsers());
    console.log(message);
  });
};
