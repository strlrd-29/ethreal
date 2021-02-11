import {
  SET_USER,
  SET_UNAUTHONTIFICATED,
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  END_LOADING,
  SET_WEBSITE,
  SET_AUTHENTICATED_ADMIN,
  SET_UNAUTHENTICATED_ADMIN,
} from "../types";
import axios from "axios";
import store from "../store";
import { getStores } from "./storesActions";
import { getTypes } from "./typesActions";
import { getItems } from "./itemsActions";

//set auth header to check if authorized in other parts of app
const setAuthorisationHeader = (token) => {
  const FBIdToken = `Sell ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

//get user data
export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/users")
    .then(({ data }) => {
      dispatch({ type: END_LOADING });
      if (data.role === "client") {
        dispatch({
          type: SET_USER,
          payload: data,
        });
      } else {
        dispatch({ type: SET_AUTHENTICATED_ADMIN });
      }
    })
    .catch(({ message }) => {
      dispatch({
        type: SET_ERRORS,
        payload: message,
      });
    });
};
//signup

export const signup = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });

  axios
    .post("/signup", newUserData)
    .then((res) => {
      // console.log(res);
      if (!res.data.token) {
        dispatch({
          type: SET_ERRORS,
          payload: res.data,
        });
      } else {
        dispatch({ type: END_LOADING });
        setAuthorisationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        history.push("/");
      }
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.message });
    });
};

export const signIn = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      if (res.data.error) {
        dispatch({ type: SET_ERRORS, payload: res.data.error });
      } else {
        dispatch({ type: END_LOADING });
        setAuthorisationHeader(res.data.token);
        dispatch({ type: CLEAR_ERRORS });
        dispatch(getUserData());
        if (store.getState().cart.length !== 0) {
          history.push("/panel");
        } else {
          history.push("/");
        }
      }
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.message });
    });
};

//logout
export const logout = (history) => (dispatch) => {
  localStorage.removeItem("FBIdToken");

  history.push("/login");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHONTIFICATED });
  dispatch({ type: SET_UNAUTHENTICATED_ADMIN });
};

//get the website data
export const getWebsiteData = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/users/website")
    .then(({ data }) => {
      dispatch({ type: END_LOADING });
      dispatch({ type: SET_WEBSITE, payload: data });
      dispatch(getStores());
      dispatch(getTypes());
      dispatch(getItems());
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};

export const updateWebsiteDetails = (updatedDetails) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/website/edit", updatedDetails)
    .then(() => {
      dispatch(getWebsiteData());
      dispatch({ type: END_LOADING });
    })
    .catch(({ message }) => {
      dispatch({ type: SET_ERRORS, payload: message });
    });
};
