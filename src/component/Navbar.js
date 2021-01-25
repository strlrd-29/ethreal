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
import Badge from "@material-ui/core/Badge";

//icons mui
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

import IconButton from "@material-ui/core/IconButton";

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
    const { classes, stores, types, authenticated, cart } = this.props;
    let badge = cart.reduce((acc, obj) => acc + obj.quantity, 0);

    let allStores = stores ? (
      Object.keys(stores).map((post) => {
        return <NavButton store={stores[post]} types={types}  />;
      })
    ) : (
      <Grid item xs={12} align="center">
        <h2>NO STORE AVAILABLE</h2>
      </Grid>
    );

    let signed = authenticated;
    return (
      <div>
        <Media
          queries={{
            small: "(max-width: 1010px)",
            large: "(min-width: 1010px)",
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
                        xs={4}
                        justify="flex-start"
                        alignItems="center"
                      >
                        <Menu storesData={stores} types={types} />
                        <Search />
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
                        xs={4}
                        justify="flex-end"
                        alignItems="center"
                      >
                        

                        <IconButton
                          component={Link}
                          to="/panel"
                          style={{
                            color: "black",
                            backgroundColor: "transparent",
                            textTransform: "none",
                          }}
                        >
                          <Badge
                            color="primary"
                            badgeContent={badge}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                          >
                            <ShoppingBasketOutlinedIcon fontSize="medium" />
                          </Badge>
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
                        xs={2}
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
                      <Grid container xs={8} justify="center">
                        {allStores}
                      </Grid>

                      <Grid container xs justify="flex-end" alignItems="center">
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
                          <Badge
                            color="primary"
                            badgeContent={badge}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                          >
                            <ShoppingBasketOutlinedIcon
                              style={{ fontSize: "1.2em" }}
                            />
                          </Badge>
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
                          <PermIdentityIcon style={{ fontSize: "1.2em" }} />
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.stores,
  types: state.types,
  user: state.user,
  cart: state.cart,
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
