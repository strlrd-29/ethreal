import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
//components
import BanneUser from "./BanneUser";

//mui stuff

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  ...theme.spreadThis,
  itemButton: {
    marginRight: 20,
    borderRadius: 0,
    textTransform: "none",
  },
});
class AllClientsTab extends Component {
  state = {
    cellSelected: false,
    selectedUser: "",
  };
  handleClickCell = (e) => {
    this.setState({ cellSelected: true });
    this.setState({ selectedUser: e.row });
  };
  componentWillUnmount() {
    this.setState({ cellSelected: false });
  }

  render() {
    const { users } = this.props;
    const newUsers = users?.map((user) => ({ ...user, id: user.userId }));

    return (
      <div style={{ width: "100%" }}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 0 }}>
          <BanneUser
            cellSelected={this.state.cellSelected}
            userHandle={this.state.selectedUser.handle}
          />
        </Grid>

        <p style={{ marginTop: 10 }}></p>
        <Divider />
        <p style={{ marginTop: 10 }}></p>

        <DataGrid
          style={{ border: "1px red solid" }}
          pageSize="8"
          onRowClick={this.handleClickCell}
          autoHeight
          columns={[
            { field: "id" },
            { field: "banned" },
            { field: "nom" },
            { field: "prenom" },
            { field: "email", width: 220 },
            { field: "phone", width: 120 },
            { field: "adress", width: 220 },
            { field: "city" },
            { field: "wilaya" },
          ]}
          rows={newUsers}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(withStyles(styles)(AllClientsTab));
