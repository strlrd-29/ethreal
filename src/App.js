import React, { useEffect } from "react";

import Divider from "@material-ui/core/Divider";

import axios from "axios";

import { Route, Switch, useHistory } from "react-router-dom";
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
import { logout, getUserData } from "./redux/actions/userActions";
//components
import ScrolleBar from "./component/ScrolleBar";
import Footer from "./component/Footer";

import Type from "./component/Type";
import Item from "./component/Item";

//pages
import home from "./pages/home";
import Panel from "./pages/panel";
import user from "./pages/user";

//app bar scroll

import Signup from "./pages/signup";
import login from "./pages/login";
import admin from "./pages/admin";
import AdminRoute from "./util/AdminRoute";
import UserRoute from "./util/UserRoute";
import { CLEAR_ERRORS } from "./redux/types";

let theme = createMuiTheme(themeObject);
theme = responsiveFontSizes(theme);

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.FBIdToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logout(history));
      } else {
        axios.defaults.headers.common["Authorization"] = token;
        dispatch(getUserData());
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
          <UserRoute path="/user" component={user} />
          <AdminRoute path="/admin" component={admin} />

          <AuthRoute path="/signup" component={Signup} />
          <AuthRoute path="/login" component={login} />
        </Switch>
      </div>
      <Divider />
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;
