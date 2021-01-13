import React, { Component, Fragment } from "react";
import Media from "react-media";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

import NavButton from "./NavButton";
import Search from "./Search";
import Menu from "./Menu";

//MUI stuff

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//icons mui
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  ...theme.spreadThis,
  list: {
    width: 300,
  },
  toolbar: {
    minHeight: 128,
  },

  navbar: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row-reverse",
  },
  spacer: {
    flex: 1,
  },
  logo: {
    height: "60px",
    fontSize: "2em",
  },
  items: {
    height: 55,
    display: "flex",
    flexDirection: "row-reverse",
  },
  item: {
    display: "flex",
    // flexDirection: "row-reverse",
    fontSize: "1.2em",
    color: "#003668",
  },
  sign: {
    marginRight: 20,
  },
});

class Navbar extends Component {
  state = {
    left: false,
    value: undefined,
    open: false,
  };

  handleChangeMenu = (event, newValue) => {
    this.setState({ value: newValue });
  };
  handleChangeHome = (event) => {
    this.setState({ value: undefined });
  };

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ [anchor]: open });
  };

  render() {
    const { classes, stores, types, authonticated } = this.props;
    // console.log(authonticated);
    let allStores = stores ? (
      stores?.map((post) => {
        return <NavButton store={post} types={types} />;
      })
    ) : (
      <Grid item xs={12} align="center">
        <h2>NO STORE AVAILABLE</h2>
      </Grid>
    );

    let signed = authonticated;
    return (
      <div>
        {signed ? (
          <Media
            queries={{
              small: "(max-width: 799px)",
              large: "(min-width: 799px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <Toolbar className="nav-container">
                    <Button
                      className={classes.logo}
                      color="primary"
                      variant="contained"
                      component={Link}
                      to="/"
                    >
                      ISHAK TOBBI
                    </Button>

                    <div className={classes.spacer}></div>

                    <IconButton
                      style={{ color: "#2b2d42" }}
                      component={Link}
                      to="/profile"
                    >
                      <AccountBoxOutlinedIcon fontSize="large" />
                    </IconButton>

                    <React.Fragment key="right">
                      <IconButton onClick={this.toggleDrawer("right", true)}>
                        <MenuIcon
                          fontSize="large"
                          style={{ color: "#2b2d42" }}
                        />
                      </IconButton>
                      <SwipeableDrawer
                        anchor="right"
                        open={this.state.right}
                        onClose={this.toggleDrawer("right", false)}
                        onOpen={this.toggleDrawer("right", true)}
                      ></SwipeableDrawer>
                    </React.Fragment>
                  </Toolbar>
                )}
                {matches.large && (
                  <Toolbar className="nav-container">
                    <Button
                      className={classes.logo}
                      color="primary"
                      component={Link}
                      to="/"
                      onClick={this.handleChangeHome}
                    >
                      ISHAK TOBBI
                    </Button>
                    <div className={classes.spacer}></div>

                    <Divider orientation="vertical" flexItem />
                  </Toolbar>
                )}
              </Fragment>
            )}
          </Media>
        ) : (
          <Media
            queries={{
              small: "(max-width: 799px)",
              large: "(min-width: 799px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <Toolbar className=".nav-container">
                    <Grid container>
                      <Grid container xs={12} direction="row">
                        <Grid
                          container
                          xs
                          justify="flex-start"
                          alignItems="flex-start"
                        >
                          <Menu storesData={stores} types={types} />
                        </Grid>
                        <Grid container xs={4} justify="center">
                          <Button
                            className={classes.logo}
                            color="primary"
                            component={Link}
                            to="/"
                            onClick={this.handleChangeHome}
                          >
                            ETHE
                          </Button>
                        </Grid>

                        <Grid
                          container
                          xs={5}
                          justify="flex-end"
                          alignItems="center"
                        >
                          <Search />

                          <IconButton
                            component={Link}
                            to="/panel"
                            style={{
                              color: "black",
                              backgroundColor: "transparent",
                              textTransform: "none",
                            }}
                          >
                            <ShoppingBasketOutlinedIcon fontSize="medium" />
                          </IconButton>

                          <IconButton
                            component={Link}
                            to="/login"
                            style={{
                              color: "black",
                              backgroundColor: "transparent",
                              textTransform: "none",
                            }}
                          >
                            <PermIdentityIcon fontSize="medium" />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Toolbar>
                )}
                {matches.large && (
                  <Toolbar className="nav-container">
                    <Grid container>
                      <Grid
                        container
                        xs={12}
                        direction="row"
                        justify="space-between"
                      >
                        <Grid
                          container
                          xs={3}
                          justify="flex-start"
                          alignItems="center"
                        >
                          <Button
                            className={classes.logo}
                            color="primary"
                            component={Link}
                            to="/"
                            onClick={this.handleChangeHome}
                          >
                            ETHEREAL
                          </Button>
                        </Grid>
                        <Grid container xs={6} justify="center">
                          {allStores}
                        </Grid>

                        <Grid
                          container
                          xs={3}
                          justify="flex-end"
                          alignItems="center"
                        >
                          <Search />

                          <IconButton
                            component={Link}
                            to="/panel"
                            style={{
                              color: "black",
                              backgroundColor: "transparent",
                              textTransform: "none",
                            }}
                          >
                            <ShoppingBasketOutlinedIcon fontSize="medium" />
                          </IconButton>

                          <IconButton
                            component={Link}
                            to="/login"
                            style={{
                              color: "black",
                              backgroundColor: "transparent",
                              textTransform: "none",
                            }}
                          >
                            <PermIdentityIcon fontSize="medium" />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid container direction="row" justify="center"></Grid>
                    </Grid>
                  </Toolbar>
                )}
              </Fragment>
            )}
          </Media>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.stores,
  types: state.types,
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
