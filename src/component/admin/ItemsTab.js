import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//components
import EditItem from "./EditItem";
import DeleteItem from "./DeleteItem";
import CreateItem from "./CreateItem";

//mui stuff
import IconButton from "@material-ui/core/IconButton";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
    cellSelected: false,
    selectedItem: "",
  };
  handleClickCell = (e) => {
    this.setState({ cellSelected: true });
    this.setState({ selectedItem: e.row });
  };
  componentWillUnmount() {
    this.setState({ cellSelected: false });
  }
  render() {
    const { classes, items } = this.props;
    const newItems = items.map((item) => ({ ...item, id: item.itemId }));

    return (
      <div style={{ width: "100%" }}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
          <CreateItem />
          <EditItem
            cellSelected={this.state.cellSelected}
            itemData={this.state.selectedItem}
          />

          <DeleteItem
            cellSelected={this.state.cellSelected}
            itemId={this.state.selectedItem.itemId}
          />
        </Grid>

        <Divider />
        <p style={{ marginTop: 10 }}></p>
        <Grid container xs={12}></Grid>

        <p style={{ marginTop: 10 }}></p>

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
          rows={newItems}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(withStyles(styles)(ItemsTab));
