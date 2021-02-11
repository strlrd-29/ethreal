import React, { Component, Fragment } from "react";
import Media from "react-media";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

//import NavButton from "./NavButton";
import Search from "../Search";
//import Menu from "./Menu";

//MUI stuff
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//icons mui

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
  button: {
    height: "60px",
    fontSize: "1.2em",
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

class NavbarAdmin extends Component {
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
    const { classes } = this.props;

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
                        xs={4}
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
                      <Grid container xs={4} justify="space-around">
                        <Button
                          className={classes.button}
                          color="textPrimary"
                          style={{
                            backgroundColor: "transparent",
                            textTransform: "none",
                          }}
                          component={Link}
                          to="/admin/website"
                          onClick={this.handleChangeHome}
                        >
                          WEBSITE
                        </Button>
                        <Button
                          className={classes.button}
                          color="textPrimary"
                          style={{
                            backgroundColor: "transparent",
                            textTransform: "none",
                          }}
                          component={Link}
                          to="/admin/shop"
                          onClick={this.handleChangeHome}
                        >
                          SHOP
                        </Button>
                        <Button
                          className={classes.button}
                          color="textPrimary"
                          style={{
                            backgroundColor: "transparent",
                            textTransform: "none",
                          }}
                          component={Link}
                          to="/admin/commands"
                          onClick={this.handleChangeHome}
                        >
                          COMMANDS
                        </Button>
                      </Grid>

                      <Grid
                        container
                        xs={4}
                        justify="flex-end"
                        alignItems="center"
                      >
                        <Search />
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withStyles(styles)(NavbarAdmin));
