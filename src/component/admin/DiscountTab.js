import { React, Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
//admin component
import AutoDiscountTab from "./AutoDiscountTab";
import CodeDiscountTab from "./CodeDiscountTab";
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
    const { classes, admin } = this.props;

    return (
      <Grid container xs={12}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
          <Typography variant="h3" color="textSecondary">
            Discounts
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
            auto discounts
          </Button>

          <Button
            className={classes.itemButton}
            value="2"
            color={this.state.value === 2 ? "secondary" : undefined}
            variant={this.state.value === 2 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            code discount
          </Button>
        </Grid>
        {this.state.value === 1 ? <AutoDiscountTab /> : <p></p>}
        {this.state.value === 2 ? <CodeDiscountTab /> : <p></p>}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withStyles(styles)(Products));
