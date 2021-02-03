import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../redux/actions/userActions";
import noprogram from "../image/noprogram.gif";

//admin component
import ItemsTab from "../component/admin/ItemsTab";
import TypesTab from "../component/admin/TypesTab";
import StoresTab from "../component/admin/StoresTab";
import CommandTab from '../component/admin/CommandTab'
//mui stuff
import IconButton from "@material-ui/core/IconButton";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//icons
import ReceiptIcon from "@material-ui/icons/Receipt";
import SettingsIcon from "@material-ui/icons/Settings";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import StorefrontIcon from "@material-ui/icons/Storefront";
import CategoryIcon from "@material-ui/icons/Category";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import store from "../redux/store";
import { SET_ADMIN_NAV, UNSET_ADMIN_NAV } from "../redux/types";

const styles = (theme) => ({
  ...theme.spreadThis,
  userimage: {
    height: 150,
    width: 150,
    margin: 20,
  },

  profile: {
    margin: 20,
  },

  info: {
    marginTop: 10,
    display: "flex",
    alignItem: "center",
  },
  editButton: {
    //width: "90%",
    height: 50,
    margin: 20,
  },
  title: {
    width: "100%",
    textAlign: "center",
    height: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  view: {
    display: "flex",
    alignItems: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  photo: {
    marginTop: 20,
    marginLeft: -10,
  },
  more: {
    marginTop: 10,
    width: "100%",
  },
  progButton: {
    width: "50%",
    height: 50,
  },
  noprogram: {
    height: 150,
    width: 150,
  },
  noProgContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20,
  },
  longButton: {
    paddingRight: 50,
    color: "#b100e8",
    fontSize: "1.1em",
    textTransform: "none",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

class shop extends Component {
  state = {
    in: false,
    shopValue: "5",
    shopMenu: false,
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
  handleClickShop = (e) => {
    this.setState({ shopValue: e.currentTarget.value });
  };
  handleClickShopMenu = () => {
    this.setState({ shopMenu: !this.state.shopMenu });
  };

  render() {
    const { classes, admin } = this.props;

    return (
      <Grid container direction="row" style={{ padding: "20px 0px 20px 0px" }}>
        <Grid
          item
          sm="auto"
          xs={12}
          style={{ padding: 0, backgroundColor: "#f2e5ff" }}
        >
          <Grid item style={{ padding: 10, backgroundColor: "#86769b" }}>
            <IconButton
              onClick={this.handleClickShopMenu}
              style={{ borderRadius: 0 }}
            >
              {this.state.shopMenu ? (
                <ArrowBackIcon style={{ color: "white" }} />
              ) : (
                <ArrowForwardIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </Grid>
          <Divider />

          <Grid
            container
            direction="column"
            style={this.state.shopMenu ? { padding: 10 } : { display: "none" }}
          >
            <Button
              style={
                this.state.shopValue == 3
                  ? { color: "#b100e8" }
                  : { color: "#495057" }
              }
              className={classes.longButton}
              value="3"
              color={this.state.shopValue == 3 ? "primary" : undefined}
              variant={this.state.shopValue == 3 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <StorefrontIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 3
                    ? { margin: "6 15 6 6", color: "#b100e8" }
                    : { margin: "6 15 6 6", color: "#495057" }
                }
              />
              Stores checkout page
            </Button>
            <Button
              style={
                this.state.shopValue == 4
                  ? { color: "#b100e8" }
                  : { color: "#495057" }
              }
              className={classes.longButton}
              value="4"
              color={this.state.shopValue == 4 ? "primary" : undefined}
              variant={this.state.shopValue == 4 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <CategoryIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 4
                    ? { margin: "6 15 6 6", color: "#b100e8" }
                    : { margin: "6 15 6 6", color: "#495057" }
                }
              />
              Types checkout page
            </Button>
            <Button
              style={
                this.state.shopValue == 5
                  ? { color: "#b100e8" }
                  : { color: "#495057" }
              }
              className={classes.longButton}
              value="5"
              color={this.state.shopValue == 5 ? "primary" : undefined}
              variant={this.state.shopValue == 5 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <LocalGroceryStoreIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 5
                    ? { margin: "6 15 6 6", color: "#b100e8" }
                    : { margin: "6 15 6 6", color: "#495057" }
                }
              />
              Items checkout page
            </Button>
            <Divider />
            <Button
              style={
                this.state.shopValue == 6
                  ? { color: "#b100e8" }
                  : { color: "#495057" }
              }
              className={classes.longButton}
              value="6"
              color={this.state.shopValue == 6 ? "primary" : undefined}
              variant={this.state.shopValue == 6 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <ReceiptIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 6
                    ? { margin: "6 15 6 6", color: "#b100e8" }
                    : { margin: "6 15 6 6", color: "#495057" }
                }
              />
              Commands checkout page
            </Button>
            <Divider />
            <Grid container direction="row">
              <Button
                style={
                  this.state.shopValue == 2
                    ? { color: "#b100e8" }
                    : { color: "#495057" }
                }
                className={classes.longButton}
                value="2"
                color={this.state.shopValue == 2 ? "primary" : undefined}
                variant={this.state.shopValue == 2 ? "text" : undefined}
                onClick={this.handleClickShop}
              >
                <ColorLensIcon
                  fontSize="medium"
                  style={
                    this.state.shopValue == 2
                      ? { margin: "6 15 6 6", color: "#b100e8" }
                      : { margin: "6 15 6 6", color: "#495057" }
                  }
                />
                Website checkout page
              </Button>
              <IconButton
                aria-label="admin"
                style={{ borderRadius: 0 }}
                value="1"
                variant={this.state.shopValue == 1 ? "text" : undefined}
                onClick={this.handleClickShop}
              >
                <SettingsIcon
                  fontSize="medium"
                  style={
                    this.state.shopValue == 1
                      ? { marginLeft: 2, color: "#b100e8" }
                      : { marginLeft: 2, color: "#495057" }
                  }
                />
              </IconButton>
            </Grid>
            <Divider />
          </Grid>
          <Grid
            container
            direction="column"
            style={this.state.shopMenu ? { display: "none" } : { padding: 10 }}
          >
            <IconButton
              aria-label="add store"
              style={{ borderRadius: 0 }}
              value="3"
              variant={this.state.shopValue == 3 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <StorefrontIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 3
                    ? { marginLeft: 2, color: "#b100e8" }
                    : { marginLeft: 2, color: "#495057" }
                }
              />
            </IconButton>
            <IconButton
              aria-label="add type"
              style={{ borderRadius: 0 }}
              value="4"
              variant={this.state.shopValue == 4 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <CategoryIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 4
                    ? { marginLeft: 2, color: "#b100e8" }
                    : { marginLeft: 2, color: "#495057" }
                }
              />
            </IconButton>
            <IconButton
              aria-label="add item"
              style={{ borderRadius: 0 }}
              value="5"
              variant={this.state.shopValue == 5 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <LocalGroceryStoreIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 5
                    ? { marginLeft: 2, color: "#b100e8" }
                    : { marginLeft: 2, color: "#495057" }
                }
              />
            </IconButton>
            <Divider />
            <IconButton
              aria-label="add item"
              style={{ borderRadius: 0 }}
              value="6"
              variant={this.state.shopValue == 6 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <ReceiptIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 6
                    ? { marginLeft: 2, color: "#b100e8" }
                    : { marginLeft: 2, color: "#495057" }
                }
              />
            </IconButton>
            <Divider />
            <IconButton
              aria-label="add type"
              style={{ borderRadius: 0 }}
              value="2"
              variant={this.state.shopValue == 2 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <ColorLensIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 2
                    ? { marginLeft: 2, color: "#b100e8" }
                    : { marginLeft: 2, color: "#495057" }
                }
              />
            </IconButton>
            <IconButton
              aria-label="admin"
              style={{ borderRadius: 0 }}
              value="1"
              variant={this.state.shopValue == 1 ? "text" : undefined}
              onClick={this.handleClickShop}
            >
              <SettingsIcon
                fontSize="medium"
                style={
                  this.state.shopValue == 1
                    ? { marginLeft: 2, color: "#b100e8" }
                    : { marginLeft: 2, color: "#495057" }
                }
              />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item sm xs={12} style={{ padding: "0px 20px 20px 20px" }}>
          <Grid item xs={12}>
            {this.state.shopValue == 1 ? <h1>value1</h1> : <p></p>}
            {this.state.shopValue == 2 ? <h1>value2</h1> : <p></p>}
            {this.state.shopValue == 3 ? <StoresTab /> : <p></p>}
            {this.state.shopValue == 4 ? <TypesTab /> : <p></p>}
            {this.state.shopValue == 5 ? <ItemsTab /> : <p></p>}
            {this.state.shopValue == 6 ? <CommandTab /> : <p></p>}
          </Grid>
        </Grid>
      </Grid>
    );
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
)(withStyles(styles)(shop));
