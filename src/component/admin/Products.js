import { React, Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
//admin component
import ItemsTab from "./ItemsTab";
import TypesTab from "./TypesTab";
import StoresTab from "./StoresTab";
//mui stuff

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//icons

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
    const { classes } = this.props;

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
            color={this.state.value === 1 ? "secondary" : undefined}
            variant={this.state.value === 1 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            all items
          </Button>

          <Button
            className={classes.itemButton}
            value="2"
            color={this.state.value === 2 ? "secondary" : undefined}
            variant={this.state.value === 2 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            types
          </Button>
          <Button
            className={classes.itemButton}
            value="3"
            color={this.state.value === 3 ? "secondary" : undefined}
            variant={this.state.value === 3 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            stores
          </Button>
        </Grid>
        {this.state.value === 1 ? <ItemsTab /> : <p></p>}
        {this.state.value === 2 ? <TypesTab /> : <p></p>}
        {this.state.value === 3 ? <StoresTab /> : <p></p>}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withStyles(styles)(Products));
