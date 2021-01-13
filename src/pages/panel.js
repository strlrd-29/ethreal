import React, { Component, Fragment } from "react";
import Media from "react-media";

import { getWebsiteData } from "../redux/actions/userActions";

import PanelItem from "../component/PanelItem";

import axios from "axios";
import withStyles, { withStyle } from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//image

import theme from "../util/theme";
// ui
import Divider from "@material-ui/core/Divider";

import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { AnimatePresence } from "framer-motion";

const styles = (theme) => ({
  ...theme.spreadThis,
});
class panel extends Component {
  state = {
    posts: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes, cart } = this.props;
    // console.log(cart);
    const variant = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    };
    let allItems =
      cart.length != 0 ? (
        cart.map((post) => {
          return (
            <Grid item xs={12}>
              <Divider />
              <PanelItem itemData={post} key={post.item.itemId} />
              <Divider />
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12} align="center">
          <h2>NO ITEM AVAILABLE</h2>
        </Grid>
      );

    return (
      <Grid container justify="center">
        <Grid container xs={12} justify="center">
          <h1>YOUR CART</h1>
        </Grid>

        <Grid container justify="center">
          <Grid container md={8} style={{ padding: 10 }}>
            {allItems}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(withStyles(styles)(panel));
