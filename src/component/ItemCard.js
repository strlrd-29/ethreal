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

import store from "../redux/store";
import { addToCart } from "../redux/actions/cartActions";

const styles = {
  card: {
    maxWidth: 800,
    margin: "auto",
    margin: 10,
    minHeight: 200,
    display: "flex",
    //flexDirection:"row-reverse",
    justifyContent: "space-between",

    flexWrap: "wrap",
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
  };

  onMouseOver = () => this.setState({ shadow: true });
  onMouseOut = () => this.setState({ shadow: false });
  handleAdd = (item) => {
    store.dispatch(addToCart(item));
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
            image={itemImagesUrl[0]}
            title={title}
          />

          <CardContent className={classes.content}>
            <Typography variant="h6" color="textPrimary">
              {title}
            </Typography>

            <Typography variant="h6" color="textPrimary">
              <Grid container xs={12} direction="row">
                <p style={promotion ? { textDecoration: "line-through" } : {}}>
                  {price + " DZD"}
                </p>
                <p style={{ marginLeft: 20 }}>{newPrice}</p>
              </Grid>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            color="primary"
            style={{ Zindex: 2 }}
            fullWidth
            onClick={() => this.handleAdd(item)}
          >
            Add to panel
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ItemCard);
