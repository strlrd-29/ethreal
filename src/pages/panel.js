import React, { Component, Fragment } from "react";

import PanelItem from "../component/PanelItem";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";

//image

// ui
import Divider from "@material-ui/core/Divider";

import Grid from "@material-ui/core/Grid";
import { Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  ...theme.spreadThis,
});
class panel extends Component {
  state = {
    posts: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes, cart } = this.props;

    let total = 0;
    cart.map((item) => {
      total += item.item.promotion
        ? item.quantity *
          (item.item.price -
            (item.item.price * item.item.pourcentagePromotion) / 100)
        : item.quantity * item.item.price;
    });
    let allItems =
      cart.length != 0 ? (
        cart.map((post) => {
          return (
            <Grid item xs={12}>
              <Divider />
              <PanelItem itemData={post} key={post.item.itemId} />
              <Divider />
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12} align="center">
          <h2>NO ITEM AVAILABLE</h2>
        </Grid>
      );

    return (
      <Grid container justify="center">
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ paddingTop: 30 }}
        >
          <Grid container md={8} style={{ padding: 10 }}>
            <Grid
              container
              xs={12}
              justify="center"
              style={{ marginBottom: 30 }}
            >
              <Typography variant="h4">Order List</Typography>
            </Grid>
            {allItems}
          </Grid>
          <Grid container alignItems="flex-start" md={3}>
            <Grid
              container
              xs={12}
              direction="column"
              justify="flex-start"
              style={{ padding: 20, backgroundColor: "#f5f3f4" }}
            >
              <Grid
                container
                xs={12}
                justify="center"
                style={{ marginBottom: 30 }}
              >
                <Typography variant="h4">Order summary</Typography>
              </Grid>

              <Divider />

              <Grid
                container
                xs={12}
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{ marginBottom: 20, marginTop: 20 }}
              >
                <Typography variant="h6">Order total :</Typography>
                <Typography variant="h6">{total} DZD</Typography>
              </Grid>

              <Grid
                container
                xs={12}
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{ marginBottom: 40 }}
              >
                <Typography variant="h6">Shipping :</Typography>
                <Typography variant="h6">{total} DZD</Typography>
              </Grid>
              <Grid
                container
                xs={12}
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{ marginBottom: 40 }}
              >
                <form
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  style={{ width: "100%" }}
                >
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Code promo"
                    variant="outlined"
                  />
                </form>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "40%", borderRadius: 0, fontSize: "1.2em" }}
                >
                  Apply
                </Button>
              </Grid>
              <Divider />
              <Grid
                container
                xs={12}
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{ marginTop: 20, marginBottom: 30 }}
              >
                <Typography variant="h6">Total price :</Typography>
                <Typography variant="h6">{total} DZD</Typography>
              </Grid>
              <Grid
                container
                xs={12}
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: "100%", borderRadius: 0, fontSize: "1.2em" }}
                >
                  CHECKOUT
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(withStyles(styles)(panel));
