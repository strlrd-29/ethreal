import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../redux/actions/userActions";
import noprogram from "../image/noprogram.gif";

//mui stuff

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//icons
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import store from "../redux/store";
import { SET_ADMIN_NAV, UNSET_ADMIN_NAV } from "../redux/types";

const styles = (theme) => ({
  ...theme.spreadThis,
});

class commands extends Component {
  state = {
    in: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidMount() {
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
    const { classes, admin } = this.props;

    return <Grid container>commands</Grid>;
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
)(withStyles(styles)(commands));
