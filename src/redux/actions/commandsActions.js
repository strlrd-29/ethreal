import axios from "axios";
import {
  DELETE_COMMANDS,
  END_LOADING,
  GET_ALL_COMMANDS,
  GET_COMMANDS,
  LOADING_UI,
  SET_ERRORS,
} from "../types";

export const getClientCommands = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/commands/client")
    .then(({ data }) => {
      dispatch({ type: END_LOADING });
      dispatch({ type: GET_COMMANDS, payload: data });
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const getAllCommands = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/commands/all")
    .then(({ data }) => {
      dispatch({ type: END_LOADING });
      dispatch({ type: GET_ALL_COMMANDS, payload: data });
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const makeCommand = (command) => (dispatch) => {
  dispatch({ type: LOADING_UI });

  axios
    .post(`/commands/make`, command)
    .then(() => {
      dispatch(getClientCommands());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCommand = (commandId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .delete(`/commands/${commandId}/delete`)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getAllCommands());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const acceptCommand = (commandId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/commands/${commandId}/accepte`)
    .then(() => {
      dispatch({ type: END_LOADING });
      dispatch(getAllCommands());
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.message });
    });
};
