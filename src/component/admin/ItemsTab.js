import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//components
import EditItem from "./EditItem";

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
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const rows = [
  {
    boozel: "kjh",
    id: 1,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 2,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 3,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 4,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 5,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 6,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 7,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 8,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 9,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 10,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
  {
    id: 11,
    store: "food",
    type: "healthy food",
    ref: "A45NK8",
    title: "dala3",
    quantity: 38,
    price: 2000 + " Da",
    promotion: 10 + "%",
    new: "oui",
    restock: "non",
    sold: 20,
    rate: 4,
  },
];

const styles = (theme) => ({
  ...theme.spreadThis,
  itemButton: {
    marginRight: 20,
    borderRadius: 0,
    textTransform: "none",
  },
});
class ItemsTab extends Component {
  state = {
    valueItems: "1",
    cellSelected: false,
    itemData: {
      id: 1,
      store: "food",
      type: "healthy food",
      ref: "A45NK8",
      title: "dala3",
      quantity: 38,
      price: 2000 + " Da",
      promotion: 10 + "%",
      new: "oui",
      restock: "non",
      sold: 20,
      rate: 4,
      images: [
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_stew-670d71c.jpg?quality=90&resize=440,400",
        "https://www.goodfood.com.au/content/dam/images/h/1/m/3/l/d/image.related.portrait.460x544.h1m8qp.png/1583215086466.jpg",
      ],
    },
  };

  handleClickItems = (e) => {
    if (this.state.cellSelected == true) this.setState({ cellSelected: false });

    this.setState({ valueItems: e.currentTarget.value });
  };
  handleClickCell = (e) => {
    this.setState({ cellSelected: true });
  };
  componentWillUnmount() {
    this.setState({ cellSelected: false });
  }
  render() {
    const { classes } = this.props;

    return (
      <div style={{ width: "100%" }}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
          <Button
            className={classes.itemButton}
            value="1"
            color={this.state.valueItems == 1 ? "secondary" : undefined}
            variant={this.state.valueItems == 1 ? "contained" : undefined}
            onClick={this.handleClickItems}
          >
            Check items
          </Button>
          <Button
            className={classes.itemButton}
            value="2"
            color={this.state.valueItems == 2 ? "secondary" : undefined}
            variant={this.state.valueItems == 2 ? "contained" : undefined}
            onClick={this.handleClickItems}
          >
            Create new item
          </Button>
        </Grid>

        <Divider />
        <p style={{ marginTop: 10 }}></p>
        <Grid container xs={12}>
          <EditItem
            cellSelected={this.state.cellSelected}
            itemData={this.state.itemData}
          />

          <Button
            startIcon={<DeleteForeverIcon />}
            style={
              this.state.cellSelected
                ? {
                    marginRight: 20,
                    borderRadius: 0,
                    backgroundColor: "#e01e37",
                    color: "white",
                  }
                : { display: "none" }
            }
          >
            delete
          </Button>
        </Grid>

        <p style={{ marginTop: 10 }}></p>

        {this.state.valueItems == 1 ? (
          <DataGrid
            pageSize="8"
            onRowClick={this.handleClickCell}
            autoHeight
            columns={[
              { field: "id" },
              { field: "store" },
              { field: "type", width: 120 },
              { field: "ref" },
              { field: "title", width: 120 },
              { field: "quantity", width: 120 },
              { field: "price", width: 120 },
              { field: "promotion", width: 120 },
              { field: "new" },
              { field: "restock" },
              { field: "sold" },
              { field: "rate" },
            ]}
            rows={rows}
          />
        ) : (
          <p></p>
        )}
        {this.state.valueItems == 2 ? <p>create item</p> : <p></p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.user.website[1],
});

export default connect(mapStateToProps)(withStyles(styles)(ItemsTab));
