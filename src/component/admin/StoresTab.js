import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//component

import CreateStore from "./CreateStore";
import EditStore from "./EditStore";
import DeleteStore from "./DeleteStore";
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
    id: 1,
    title: "dala3",
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
class StoresTab extends Component {
  state = {
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
      noImages: [
        "https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png",
      ],
    },
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
      <div style={{ height: 250, width: "100%" }}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
          <CreateStore itemData={this.state.itemData} />

          <EditStore
            cellSelected={this.state.cellSelected}
            itemData={this.state.itemData}
          />

          <DeleteStore cellSelected={this.state.cellSelected} />
        </Grid>

        <Divider />
        <p style={{ marginTop: 10 }}></p>

        <p style={{ marginTop: 10 }}></p>

        <DataGrid
          pageSize="8"
          onRowSelected={this.handleClickCell}
          autoHeight
          columns={[{ field: "id" }, { field: "title", width: 200 }]}
          rows={rows}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.user.website[1],
});

export default connect(mapStateToProps)(withStyles(styles)(StoresTab));
