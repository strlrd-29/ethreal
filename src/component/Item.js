import React, { Component, Fragment } from "react";

import { getWebsiteData } from "../redux/actions/userActions";
import ItemImage from "./ItemImage";

import withStyles from "@material-ui/core/styles/withStyles";
import Media from "react-media";

import { connect } from "react-redux";

// ui
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

//redux
import store from "../redux/store";
import { addToCart } from "../redux/actions/cartActions";

const styles = (theme) => ({
  ...theme.spreadThis,
  noprogram: {
    height: 250,
    width: 250,
  },
  noProgContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      minWidth: 50,
      maxWidth: 50,
    },
  },
});
class Item extends Component {
  state = {
    posts: "",
    quantity: 0,
    size: "",
  };

  handleChangeSize = (event) => {
    this.setState({ size: event.target.value });
  };
  handleQuantityPlus = (event) => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  handleQuantityMinus = (event) => {
    if (this.state.quantity != 0)
      this.setState({ quantity: this.state.quantity - 1 });
  };
  handleAdd = (item, quantity) => {
    if (quantity) {
      store.dispatch(addToCart(item, quantity));
    } else {
      alert("please add your quantity");
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let ourTitle = window.location.href.split("/")[5].replace(/_/g, " ");
    const { classes, items } = this.props;

    let ourItem;

    items.map((post) => {
      if (post.title == ourTitle) {
        return (ourItem = post);
      }
    });

    let newPrice = ourItem.promotion
      ? ourItem.price -
        (ourItem.price * ourItem.pourcentagePromotion) / 100 +
        " DZD"
      : null;

    return (
      <Grid container direction="column" alignItems="center">

        <Grid container xs={12} md={10} style={{marginTop:20,marginBottom:30}}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link color="inherit" href="/" >
                  Home
              </Link>
              <Link color="inherit" href={`/collection/${ourItem.store.split(" ").join("_")}`} >
                  {ourItem.store}
              </Link>
              <Link color="inherit" href={`/type/${ourItem.type.split(" ").join("_")}`} >
                  {ourItem.type}
              </Link>
              <Typography color="textPrimary">{ourItem.title}</Typography>
            </Breadcrumbs>
        </Grid>

        <Grid container xs={12} md={10}>
          <Grid item md={6} xs={12}>
            <ItemImage  itemStore={ourItem.store} itemImages={ourItem.itemImagesUrl} />
          </Grid>
          <Grid container md={5} xs={12} style={{ padding: 10 }}>
            <Grid item xs={12} style={{ marginBottom: 30 }}>
              <Typography variant="body2" color="textPrimary">
                ref: {ourItem.ref}{" "}
              </Typography>
              <Typography variant="h4" color="textPrimary">
                {ourItem.title}
              </Typography>
              <Rating
                name="read-only"
                style={{ marginTop: 10 }}
                precision={0.5}
                value={ourItem.rate}
                readOnly
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 30 }}>
              <Typography
                style={{ marginBottom: 10 }}
                variant="h6"
                color="textPrimary"
              >
                Description
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {ourItem.description}
              </Typography>
            </Grid>
            <Grid
              container
              xs={12}
              direction="row"
              alignItems="flex-end"
              style={{ padding: 0, marginBottom: 20 }}
            >
              <Typography
                style={{ fontWeight: "bold" }}
                variant="h5"
                color="primary"
              >
                {newPrice}
              </Typography>
              <Typography
                variant={ourItem.promotion ? "body1" : "h5"}
                color={ourItem.promotion ? "textSecondary" : "primary"}
                style={
                  ourItem.promotion
                    ? { textDecoration: "line-through", marginLeft: 20 }
                    : { fontWeight: "bold" }
                }
              >
                {ourItem.price + " DZD"}
              </Typography>
            </Grid>

            <Media
              queries={{
                small: "(max-width: 799px)",
                large: "(min-width: 799px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && (
                    <Grid
                      container
                      xs={12}
                      direction="row"
                      alignItems="center"
                      style={{ marginBottom: 30 }}
                    >
                      <Grid
                        container
                        xs={10}
                        justify="space-between"
                        alignItems="center"
                        style={{ marginRight: 20 }}
                      >
                        <Typography variant="h6" color="textPrimary">
                          Size :{" "}
                        </Typography>
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={this.state.size}
                            onChange={this.handleChangeSize}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={40}>42</MenuItem>
                            <MenuItem value={41}>43</MenuItem>
                            <MenuItem value={42}>44</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid
                        container
                        xs={12}
                        justify="space-between"
                        alignItems="center"
                        style={{ marginRight: 20 }}
                      >
                        <Typography variant="h6" color="textPrimary">
                          Q-ty :{" "}
                        </Typography>
                        <div style={{ display: "flex" }}>
                          <Button
                            color="primary"
                            style={{ height: "100" }}
                            onClick={this.handleQuantityMinus}
                          >
                            <RemoveOutlinedIcon
                              fontSize="large"
                              color="primary"
                            />
                          </Button>
                          <form noValidate autoComplete="off">
                            <TextField
                              id="outlined-basic"
                              type="number"
                              variant="outlined"
                              style={{ width: 70 }}
                              value={this.state.quantity}
                              disabled
                              labelwidth={10}
                              inputProps={{ readOnly: true, min: 0 }}
                            />
                          </form>
                          <Button
                            style={{ height: "100" }}
                            color="primary"
                            onClick={this.handleQuantityPlus}
                          >
                            <AddOutlinedIcon color="primary" fontSize="large" />
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  )}
                  {matches.large && (
                    <Grid
                      container
                      xs={12}
                      direction="column"
                     // alignItems="center"
                      style={{ marginBottom: 30 }}
                    >
                      <Grid
                        container
                        xs={12}
                        direction="row"
                        alignItems="center"
                        style={{ marginRight: 20 }}
                      >
                        
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            label="Size"
                            value={this.state.size}
                            onChange={this.handleChangeSize}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={40}>42</MenuItem>
                            <MenuItem value={41}>43</MenuItem>
                            <MenuItem value={42}>44</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid
                        container
                        xs
                        alignItems="center"
                        style={{ marginRight: 20 }}
                      >
                        
                        <div style={{ display: "flex" }}>
                          <Button
                            color="primary"
                            style={{ height: "100" }}
                            onClick={this.handleQuantityMinus}
                          >
                            <RemoveOutlinedIcon
                              fontSize="large"
                              color="primary"
                            />
                          </Button>
                          <form noValidate autoComplete="off">
                            <TextField
                              id="outlined-basic"
                              type="number"
                              variant="outlined"
                              style={{ width: 70 }}
                              value={this.state.quantity}
                              disabled
                              labelwidth={10}
                              inputProps={{ readOnly: true, min: 0 }}
                            />
                          </form>
                          <Button
                            style={{ height: "100" }}
                            color="primary"
                            onClick={this.handleQuantityPlus}
                          >
                            <AddOutlinedIcon color="primary" fontSize="large" />
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  )}
                </Fragment>
              )}
            </Media>

            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => this.handleAdd(ourItem, this.state.quantity)}
                style={{
                  fontSize: "1.5em",
                  width: "100%",
                  height: "100%",
                  borderRadius: 0,
                }}
              >
                ADD TO CART
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
        </Grid>
        <Grid container xs={12} justify="center" style={{ margin: 20 }}>
          <Grid
            container
            xs={12}
            md={3}
            direction="column"
            justify="center"
            align="center"
            style={{ margin: 20 }}
          >
            <Grid item xs={12}>
              <LocalMallOutlinedIcon fontSize="large" />
            </Grid>
            <Grid item xs={12}>
              <Typography>Produit Original</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            md={3}
            direction="column"
            justify="center"
            align="center"
            style={{ margin: 20 }}
          >
            <Grid item xs={12}>
              <MonetizationOnOutlinedIcon fontSize="large" />
            </Grid>
            <Grid item xs={12}>
              <Typography>Paiement à la livraison</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            md={3}
            direction="column"
            justify="center"
            align="center"
            style={{ margin: 20 }}
          >
            <Grid item xs={12}>
              <HistoryOutlinedIcon fontSize="large" />
            </Grid>
            <Grid item xs={12}>
              <Typography>Livraison de 1 à 7 jours</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  types: state.types,
  items: state.items,
  UI: state.ui,
});

export default connect(mapStateToProps, { getWebsiteData })(
  withStyles(styles)(Item)
);
