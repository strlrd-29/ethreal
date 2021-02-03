import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//component
import AccepteCommand from "./AccepteCommand";
import RefuseCommand from "./RefuseCommand";
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
import ClearIcon from "@material-ui/icons/Clear";

import store from "../../redux/store";
import { getAllCommands } from "../../redux/actions/commandsActions";

const rowsItem = [
  {
    id: "1",
    title: "healthy food recipe",
    quantity: "20",
    price: "1900",
    total: "45000",
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
class CommandTab extends Component {
  state = {
    cellSelected: false,
    valueCommand: "1",
    itemInfo: false,
    selectedCommand: "",
    itemsInformations: [],
    acceptedCommands: "",
    acceptedInformations: [],
  };

  handleClickCell = (e) => {
    this.setState({ cellSelected: true });
    this.setState({ selectedCommand: e.row });
  };
  handleClickItemInfo = () => {
    this.setState({ itemInfo: !this.state.itemInfo });
    if (this.state.valueCommand === "1") {
      let index = this.state.selectedCommand.titles?.length;
      let items = [];
      for (let i = 0; i < index; i++) {
        items.push({
          title: this.state.selectedCommand.titles[i],
          quantity: this.state.selectedCommand.quantities[i],
          price: this.state.selectedCommand.prices[i],
          id: this.state.selectedCommand.itemsId[i],
          total:
            this.state.selectedCommand.quantities[i] *
            this.state.selectedCommand.prices[i],
        });
      }
      this.setState({ itemsInformations: items });
    }
    if (this.state.valueCommand === "2") {
      let index = this.state.selectedCommand.titles.length;
      let items = [];
      for (let i = 0; i < index; i++) {
        items.push({
          title: this.state.selectedCommand.titles[i],
          quantity: this.state.selectedCommand.quantities[i],
          price: this.state.selectedCommand.prices[i],
          id: this.state.selectedCommand.itemsId[i],
          total:
            this.state.selectedCommand.quantities[i] *
            this.state.selectedCommand.prices[i],
        });
      }
      this.setState({ acceptedInformations: items });
    }
  };
  handleClickCommand = (e) => {
    if (this.state.cellSelected) this.setState({ cellSelected: false });

    this.setState({ valueCommand: e.currentTarget.value });
  };
  componentDidMount() {
    store.dispatch(getAllCommands());
  }
  render() {
    const { classes, commands } = this.props;
    this.state.acceptedCommands = commands.filter(
      (command) => command.accepted === true
    );
    return (
      <Grid container xs={12}>
        <div style={{ height: 250, width: "100%" }}>
          <Grid container xs={12} direction="row" style={{ paddingBottom: 20 }}>
            <Button
              className={classes.itemButton}
              value="1"
              color={this.state.valueCommand == 1 ? "secondary" : undefined}
              variant={this.state.valueCommand == 1 ? "outlined" : undefined}
              onClick={this.handleClickCommand}
            >
              New Commands
            </Button>
            <Button
              className={classes.itemButton}
              value="2"
              color={this.state.valueCommand == 2 ? "secondary" : undefined}
              variant={this.state.valueCommand == 2 ? "outlined" : undefined}
              onClick={this.handleClickCommand}
            >
              Accepted Commands
            </Button>
          </Grid>

          <Divider />
          <p style={{ marginTop: 10 }}></p>
          <Grid container xs={12} direction="row">
            <AccepteCommand
              cellSelected={this.state.cellSelected}
              commandId={this.state.selectedCommand.id}
            />
            <RefuseCommand
              cellSelected={this.state.cellSelected}
              commandId={this.state.selectedCommand.id}
            />
          </Grid>

          <p style={{ marginTop: 10 }}></p>

          {this.state.valueCommand == 1 ? (
            <Grid container xs={12} style={{ height: "100%" }}>
              <Grid
                container
                xs={this.state.itemInfo ? 7 : 12}
                style={{ height: "100%" }}
                direction="column"
              >
                <Typography variant="h6" style={{ marginBottom: 10 }}>
                  Users Informations
                </Typography>

                <DataGrid
                  onRowClick={this.handleClickCell}
                  columns={[
                    { field: "id", width: 70 },
                    { field: "accepted" },
                    { field: "nom" },
                    { field: "prenom" },
                    { field: "email", width: 220 },
                    { field: "phone", width: 120 },
                    { field: "adress", width: 220 },
                    { field: "city" },
                    { field: "wilaya" },
                    {
                      field: "items",
                      renderCell: (params) => (
                        <strong>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={this.handleClickItemInfo}
                          >
                            View
                          </Button>
                        </strong>
                      ),
                    },
                  ]}
                  rows={commands}
                />
              </Grid>

              <Grid
                container
                xs={5}
                style={
                  this.state.itemInfo
                    ? { paddingLeft: 10, height: "100%" }
                    : { display: "none" }
                }
                direction="column"
                justify="flex-start"
              >
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Typography variant="h6" style={{ marginBottom: 10 }}>
                    Items Informations
                  </Typography>
                  <IconButton
                    aria-label="ignore"
                    size="small"
                    style={{ borderRadius: 0 }}
                    onClick={this.handleClickItemInfo}
                  >
                    <ClearIcon style={{ fontSize: "1.6em" }} />
                  </IconButton>
                </Grid>

                <DataGrid
                  columns={[
                    { field: "id", width: 70 },
                    { field: "title", width: 220 },
                    { field: "quantity", width: 120 },
                    { field: "price" },
                    { field: "total" },
                  ]}
                  rows={this.state.itemsInformations}
                />
              </Grid>
            </Grid>
          ) : (
            <p></p>
          )}
          {this.state.valueCommand == 2 ? (
            <Grid container xs={12} style={{ height: "100%" }}>
              <Grid
                container
                xs={this.state.itemInfo ? 7 : 12}
                style={{ height: "100%" }}
                direction="column"
              >
                <Typography variant="h6" style={{ marginBottom: 10 }}>
                  Users Informations
                </Typography>

                <DataGrid
                  onRowClick={this.handleClickCell}
                  columns={[
                    { field: "id", width: 70 },
                    { field: "accepted" },
                    { field: "nom" },
                    { field: "prenom" },
                    { field: "email", width: 220 },
                    { field: "phone", width: 120 },
                    { field: "adress", width: 220 },
                    { field: "city" },
                    { field: "wilaya" },
                    {
                      field: "items",
                      renderCell: (params) => (
                        <strong>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={this.handleClickItemInfo}
                          >
                            View
                          </Button>
                        </strong>
                      ),
                    },
                  ]}
                  rows={this.state.acceptedCommands}
                />
              </Grid>

              <Grid
                container
                xs={5}
                style={
                  this.state.itemInfo
                    ? { paddingLeft: 10, height: "100%" }
                    : { display: "none" }
                }
                direction="column"
                justify="flex-start"
              >
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Typography variant="h6" style={{ marginBottom: 10 }}>
                    Items Informations
                  </Typography>
                  <IconButton
                    aria-label="ignore"
                    size="small"
                    style={{ borderRadius: 0 }}
                    onClick={this.handleClickItemInfo}
                  >
                    <ClearIcon style={{ fontSize: "1.6em" }} />
                  </IconButton>
                </Grid>

                <DataGrid
                  columns={[
                    { field: "id", width: 70 },
                    { field: "title", width: 220 },
                    { field: "quantity", width: 120 },
                    { field: "price" },
                    { field: "total" },
                  ]}
                  rows={this.state.acceptedInformations}
                />
              </Grid>
            </Grid>
          ) : (
            <p></p>
          )}
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  commands: state.commands,
});

export default connect(mapStateToProps)(withStyles(styles)(CommandTab));
