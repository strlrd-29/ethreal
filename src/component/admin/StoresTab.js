import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
//component

import CreateStore from "./CreateStore";
import EditStore from "./EditStore";
import DeleteStore from "./DeleteStore";
//mui stuff

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

//icons

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
    const { stores } = this.props;
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
