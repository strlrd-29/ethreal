import { React, Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
//admin component
import AllClientsTab from "./AllClientsTab";
import OrdersClientsTab from "./OrdersClientsTab";
import NoOrdersClientsTab from "./NoOrdersClientsTab";
import ReportsClientsTab from "./ReportsClientsTab";

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

class Customers extends Component {
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
            Customers
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
            all Client
          </Button>

          <Button
            className={classes.itemButton}
            value="2"
            color={this.state.value === 2 ? "secondary" : undefined}
            variant={this.state.value === 2 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            with orders
          </Button>
          <Button
            className={classes.itemButton}
            value="3"
            color={this.state.value === 3 ? "secondary" : undefined}
            variant={this.state.value === 3 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            without orders
          </Button>
          <Button
            className={classes.itemButton}
            value="4"
            color={this.state.value === 4 ? "secondary" : undefined}
            variant={this.state.value === 4 ? "outlined" : undefined}
            onClick={this.handleClickProduct}
          >
            client reports
          </Button>
        </Grid>
        {this.state.value === 1 ? <AllClientsTab /> : <p></p>}
        {this.state.value === 2 ? <OrdersClientsTab /> : <p></p>}
        {this.state.value === 3 ? <NoOrdersClientsTab /> : <p></p>}
        {this.state.value === 4 ? <ReportsClientsTab /> : <p></p>}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withStyles(styles)(Customers));
