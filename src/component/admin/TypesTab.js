import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//component
import CreateType from "./CreateType";
import EditType from "./EditType";
import DeleteType from "./DeleteType";
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
class TypesTab extends Component {
  state = {
    cellSelected: false,
    selectedType: "",
  };

  handleClickCell = (e) => {
    this.setState({ cellSelected: true });
    this.setState({ selectedType: e.data });
  };
  componentWillUnmount() {
    this.setState({ cellSelected: false });
  }

  render() {
    const { types } = this.props;
    const newTypes = types.map((type) => ({ ...type, id: type.typeId }));

    return (
      <div style={{ height: 250, width: "100%" }}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
          <CreateType />

          <EditType
            cellSelected={this.state.cellSelected}
            typeData={this.state.selectedType}
          />

          <DeleteType
            cellSelected={this.state.cellSelected}
            typeId={this.state.selectedType.typeId}
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
            { field: "store" },
            { field: "title", width: 200 },
          ]}
          rows={newTypes}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  types: state.types,
});

export default connect(mapStateToProps)(withStyles(styles)(TypesTab));
