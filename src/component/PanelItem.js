import React, { useState } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";

//image

// ui

import TextField from "@material-ui/core/TextField";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
//redux
import { useDispatch } from "react-redux";
import {
  removeItem,
  addToCart,
  decreaseQuantity,
} from "../redux/actions/cartActions";

//framer motion animation
import { motion } from "framer-motion";

const styles = (theme) => ({
  ...theme.spreadThis,
});

const Panel = ({ classes, itemData }) => {
  const newPrice = itemData.item.promotion
    ? itemData.item.price -
      (itemData.item.price * itemData.item.pourcentagePromotion) / 100
    : null;
  const [quantity, setQuantity] = useState(itemData.quantity);
  const dispatch = useDispatch();

  const handleQuantityPlus = (item) => {
    dispatch(addToCart(item));
    setQuantity(quantity + 1);
  };
  const handleQuantityMinus = (item) => {
    dispatch(decreaseQuantity(item));
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleRemove = (title) => {
    dispatch(removeItem(title));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Grid
        container
        style={{ paddingTop: 20, paddingBottom: 20 }}
        justify="space-between"
      >
        <Grid container xs={12} md={6} align="center">
          <img
            src={
              itemData.item.itemImagesUrl[1]
                ? itemData.item.itemImagesUrl[1]
                : itemData.item.itemImagesUrl[0]
            }
            style={{ maxHeight: 100, marginRight: 20 }}
          />
          <Typography
            variant="h5"
            style={{ display: "flex", alignItems: "center" }}
          >
            {itemData.item.title}
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={6}
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Typography>
            {newPrice ? newPrice : itemData.item.price} DZD
          </Typography>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              color="primary"
              onClick={() => handleQuantityMinus(itemData)}
            >
              <RemoveOutlinedIcon fontSize="medium" color="primary" />
            </Button>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <TextField
                id="outlined-basic"
                disabled
                size="small"
                variant="outlined"
                style={{ width: 60 }}
                value={quantity}
                labelwidth={5}
                inputProps={{
                  min: 0,
                  classes: {
                    input: classes.resize,
                  },
                }}
              />
            </form>

            <Button
              color="primary"
              onClick={() => handleQuantityPlus(itemData.item)}
            >
              <AddOutlinedIcon color="primary" fontSize="medium" />
            </Button>
          </div>

          <Typography>
            {newPrice
              ? newPrice * itemData.quantity
              : itemData.item.price * itemData.quantity}{" "}
            DZD
          </Typography>

          <IconButton onClick={() => handleRemove(itemData.item.title)}>
            <CloseIcon fontSize="medium" />
          </IconButton>
        </Grid>
      </Grid>
    </motion.div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Panel));
