import React, { useEffect } from "react";

import Divider from "@material-ui/core/Divider";

import axios from "axios";

import ReactGa from "react-ga";
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
import { useDispatch, useSelector } from "react-redux";
import { logout, getUserData } from "./redux/actions/userActions";
// components admin
import ScrollebarAdmin from "./component/admin/ScrollebarAdmin";

//components
import ScrolleBar from "./component/ScrolleBar";
import Footer from "./component/Footer";

import Store from "./component/Store";
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
  const { adminNav } = useSelector((state) => state.user);
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.FBIdToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logout(history));
      } else {
        axios.defaults.headers.common["Authorization"] = token;
        dispatch(getUserData());
      }
    }

    ReactGa.initialize("G-8RFM869L4K");
    ReactGa.pageview("/");
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="container">
        {adminNav ? <ScrollebarAdmin /> : <ScrolleBar />}
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/collection/:title" component={Store} />
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
