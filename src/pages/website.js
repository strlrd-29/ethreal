import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { logout } from "../redux/actions/userActions";

//mui stuff

import Grid from "@material-ui/core/Grid";

//icons

import { SET_ADMIN_NAV, UNSET_ADMIN_NAV } from "../redux/types";

import store from "../redux/store";

const styles = (theme) => ({
  ...theme.spreadThis,
});

class website extends Component {
  state = {
    in: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    store.dispatch({ type: SET_ADMIN_NAV });
  }

  componentWillUnmount() {
    store.dispatch({ type: UNSET_ADMIN_NAV });
  }

  handleMoreItem = () => {
    this.setState({ in: !this.state.in });
  };
  handleLogout = () => {
    this.props.logout(this.props.history);
  };

  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);

    this.props.uploadImage(formData);
  };
  handleClickUpload = () => {
    const upload = document.getElementById("inputPic");
    upload.click();
  };

  render() {
    return <Grid container></Grid>;
  }
}

const mapActionToProps = {
  logout,
};
const mapStateToProps = (state) => ({
  admin: state.user.website[1],
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(website));
