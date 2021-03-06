import React, { Component } from "react";

import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";

//mui stuff
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import store from "../redux/store";
import { addToCart } from "../redux/actions/cartActions";
import { connect } from "react-redux";

const styles = {
  card: {
    maxWidth: 800,
    margin: "auto",
    margin: 7,
    //  minHeight: 200,
    display: "flex",
    //flexDirection:"row-reverse",
    justifyContent: "space-between",

    flexWrap: "wrap",
    borderRadius: 0,
  },

  content: {
    display: "flex",
    flexDirection: "column",

    //  alignItems:"flex-end",
  },
  content2: {
    height: 10,
    display: "flex",
    alignItems: "center",
    width: 280,
    // backgroundColor: "#7451eb",
    //flexDirection:"row-reverse",
  },

  item: {
    height: 50,
    display: "flex",
    alignItems: "center",
  },
  imageItem: {
    width: "100%",
    height: 250,
  },
};
class ItemCard extends Component {
  state = {
    shadow: false,
    apear: true,
    adminError: false,
  };

  onMouseOver = () => this.setState({ shadow: true });
  onMouseOut = () => this.setState({ shadow: false });
  handleAdd = (item) => {
    if (this.props.authenticatedAdmin) {
      this.setState({ adminError: true });
    } else {
      store.dispatch(addToCart(item));
    }
  };

  render() {
    const {
      classes,
      post: {
        title,
        type,
        itemImagesUrl,
        price,
        promotion,
        pourcentagePromotion,
        itemId,
        store,
        quantity,
      },
    } = this.props;
    const item = {
      title,
      type,
      itemImagesUrl,
      price,
      promotion,
      pourcentagePromotion,
      itemId,
      store,
      quantity,
    };

    let newPrice = promotion
      ? price - (price * pourcentagePromotion) / 100 + " DZD"
      : null;

    let promo = promotion ? (
      <Typography
        variant="h5"
        style={{
          position: "absolute",
          left: 5,
          top: 5,
          padding: 5,
          backgroundColor: "#b100e8",
          color: "white",
        }}
      >
        {pourcentagePromotion} %
      </Typography>
    ) : null;

    return (
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
          position: "relative",
          marginBottom: 40,
        }}
        className={classes.card}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        raised={this.state.shadow}
      >
        <CardActionArea
          component={Link}
          to={`/type/${type.split(" ").join("_")}/${title
            .split(" ")
            .join("_")}`}
        >
          {promo}

          <CardMedia
            className={classes.imageItem}
            image={this.state.shadow ? itemImagesUrl[1] : itemImagesUrl[0]}
            title={title}
          />
          {quantity == 0 ? (
            <Typography
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "1.5em",
              }}
            >
              <span style={{ border: "2px white solid", padding: 10 }}>
                Out of stock
              </span>
            </Typography>
          ) : (
            <p style={{ margin: 0, padding: 0 }}></p>
          )}

          <CardContent className={classes.content}>
            <Typography variant="body1" color="textSecondary">
              {type}
            </Typography>
            <Typography style={{ fontSize: "1.5em" }} color="textPrimary">
              {title}
            </Typography>

            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginTop: 5 }}
            >
              <span style={promotion ? { textDecoration: "line-through" } : {}}>
                {price + " DZD"}
              </span>
              <span style={{ marginLeft: 20 }}>{newPrice}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ padding: 0 }}>
          <Button
            color="secondary"
            variant="contained"
            style={{ Zindex: 2, borderRadius: 0 }}
            fullWidth
            onClick={() => this.handleAdd(item)}
          >
            Add to panel
          </Button>
        </CardActions>
        {this.state.adminError && (
          <Alert
            severity="warning"
            onClose={() => this.setState({ adminError: false })}
          >
            you can't add items as admin
          </Alert>
        )}
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({
  authenticatedAdmin: state.user.authenticatedAdmin,
});

export default connect(mapStateToProps)(withStyles(styles)(ItemCard));
