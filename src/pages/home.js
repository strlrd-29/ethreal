import React, { Component, Fragment, useEffect } from "react";
import Media from "react-media";

import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

//redux
import { useDispatch } from "react-redux";
import { getWebsiteData } from "../redux/actions/userActions";
//image

import theme from "../util/theme";
// ui

import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import store from "../redux/store";

const styles = (theme) => ({
  ...theme.spreadThis,
});

const mapStateToProps = (state) => ({
  user: state.user,
});

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWebsiteData());
  }, []);
  return (
    <Grid container>
      <Grid container>
        <h1>hey you x)</h1>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
