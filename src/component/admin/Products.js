import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//admin component
import ItemsTab from "./ItemsTab";
import TypesTab from "./TypesTab";
import StoresTab from "./StoresTab";
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
import ClearIcon from "@material-ui/icons/Clear";

const styles = (theme) => ({
  ...theme.spreadThis,
  itemButton: {
    marginRight: 20,
    borderRadius: 0,
    textTransform: "none",
  },
});

class Products extends Component {
  state = {
    value: "1",
  };

  handleClickProduct = (e) => {
    this.setState({ value: e.currentTarget.value });
  };
  render() {
    const { classes, admin } = this.props;

    return (
      <Grid container xs={12}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
          <Typography variant="h3" color="textSecondary">
            Products
          </Typography>
        </Grid>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
          <Button
            className={classes.itemButton}
            value="1"
            color={this.state.value == 1 ? "secondary" : undefined}
            variant={this.state.value == 1 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            all items
          </Button>

          <Button
            className={classes.itemButton}
            value="2"
            color={this.state.value == 2 ? "secondary" : undefined}
            variant={this.state.value == 2 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            types
          </Button>
          <Button
            className={classes.itemButton}
            value="3"
            color={this.state.value == 3 ? "secondary" : undefined}
            variant={this.state.value == 3 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            stores
          </Button>
        </Grid>
        {this.state.value == 1 ? <ItemsTab /> : <p></p>}
        {this.state.value == 2 ? <TypesTab /> : <p></p>}
        {this.state.value == 3 ? <StoresTab /> : <p></p>}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.user.website[1],
});

export default connect(mapStateToProps)(withStyles(styles)(Products));