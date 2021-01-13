import React, { useEffect } from "react";

import Divider from "@material-ui/core/Divider";

import axios from "axios";

import { Route, Switch } from "react-router-dom";
import "./App.css";

import {
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";
//util
import AuthRoute from "./util/AuthRoute";
import themeObject from "./util/theme";
//redux
import { useDispatch } from "react-redux";
import { SET_AUTHONTICATED } from "./redux/types";
import { logout, getUserData } from "./redux/actions/userActions";
//components
import ScrolleBar from "./component/ScrolleBar";
import Footer from "./component/Footer";

import Type from "./component/Type";
import Item from "./component/Item";

//pages
import home from "./pages/home";
import Panel from "./pages/panel";

//app bar scroll

import Signup from "./pages/signup";
import login from "./pages/login";

let theme = createMuiTheme(themeObject);
theme = responsiveFontSizes(theme);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.FBIdToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logout());
        window.location.href = "/login";
      } else {
        dispatch({ type: SET_AUTHONTICATED });
        axios.defaults.headers.common["Authorization"] = token;
        dispatch(getUserData);
      }
    }
  }, [dispatch]);
  return (
    <MuiThemeProvider theme={theme}>
      <ScrolleBar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/type/:title" component={Type} />
          <Route exact path="/type/:type/:title" component={Item} />
          <Route exact path="/panel" component={Panel} />

          <AuthRoute exact path="/signup" component={Signup} />
          <AuthRoute exact path="/login" component={login} />
        </Switch>
      </div>
      <Divider />
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;
