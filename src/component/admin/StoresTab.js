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
    storeData: "",
  };
  handleClickCell = (e) => {
    this.setState({ cellSelected: true });
    this.setState({ storeData: e.data });
  };
  componentWillUnmount() {
    this.setState({ cellSelected: false });
  }
  render() {
    const { classes, stores } = this.props;
    const newStores = stores.map((store) => ({ ...store, id: store.storeId }));
    return (
      <div style={{ height: 250, width: "100%" }}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
          <CreateStore />

          <EditStore
            cellSelected={this.state.cellSelected}
            storeData={this.state.storeData}
          />

          <DeleteStore
            storeId={this.state.storeData.storeId}
            cellSelected={this.state.cellSelected}
          />
        </Grid>

        <Divider />
        <p style={{ marginTop: 10 }}></p>

        <p style={{ marginTop: 10 }}></p>

        <DataGrid
          pageSize="8"
          onRowSelected={this.handleClickCell}
          autoHeight
          columns={[
            { field: "id" },
            { field: "title", width: 200 },
            { field: "description", width: 450 },
          ]}
          rows={newStores}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.stores,
});

export default connect(mapStateToProps)(withStyles(styles)(StoresTab));
