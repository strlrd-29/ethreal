import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
//components
import DeleteCodeDiscount from "./DeleteCodeDiscount";
import CreateCodeDiscount from "./CreateCodeDiscount";

//mui stuff
import IconButton from "@material-ui/core/IconButton";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
//icon
import ClearIcon from "@material-ui/icons/Clear";

const rows = [
  {
    id: "1",
    code: "ALGERIA123",
    customers: "new clients",
    start: "21 12 2020",
    end: "21 12 2021",
    limits: "one person (2)",
    amount: 3000,
    quantity: 20,
    type: "buy x get y",
    buy: "healthy meal",
    get: "healthy plats",
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
class CodeDiscountTab extends Component {
  state = {
    cellSelected: false,
    codeInfo: false,
    selectedItem: "",
  };
  handleClickCell = (e) => {
    console.log(this.state.selectedItem);
    this.setState({ cellSelected: true });
    this.setState({ selectedItem: e.row });
  };

  handleClickCodeInfo = () => {
    this.setState({ codeInfo: !this.state.codeInfo });
  };
  componentWillUnmount() {
    this.setState({ cellSelected: false });
  }
  render() {
    const { items } = this.props;

    return (
      <div style={{ width: "100%", height: 350 }}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 0 }}>
          <CreateCodeDiscount />
          <DeleteCodeDiscount
            cellSelected={this.state.cellSelected}
            itemId={this.state.selectedItem.itemId}
          />
        </Grid>

        <p style={{ marginTop: 10 }}></p>
        <Divider />
        <p style={{ marginTop: 10 }}></p>

        <Grid container xs={12} style={{ height: "100%" }}>
          <Grid
            container
            xs={this.state.codeInfo ? 4 : 7}
            style={{ height: "100%" }}
            direction="column"
          >
            <Typography variant="h6" style={{ marginBottom: 10 }}>
              discount Code
            </Typography>

            <DataGrid
              onRowClick={(e) => {
                this.handleClickCell(e);
                this.handleClickCodeInfo();
              }}
              columns={[
                { field: "id", width: 70 },
                { field: "code", width: 120 },
                { field: "start", width: 120 },
                { field: "end", width: 120 },
              ]}
              rows={rows}
            />
          </Grid>

          <Grid
            container
            xs={8}
            style={
              this.state.codeInfo
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
                Discount Code Informations
              </Typography>
              <IconButton
                aria-label="ignore"
                size="small"
                style={{ borderRadius: 0 }}
                onClick={this.handleClickCodeInfo}
              >
                <ClearIcon style={{ fontSize: "1.6em" }} />
              </IconButton>
            </Grid>

            <DataGrid
              columns={[
                { field: "customers", width: 120 },

                { field: "limits", width: 120 },
                { field: "amount" },
                { field: "quantity" },
                { field: "type", width: 120 },
                { field: "buy", width: 120 },
                { field: "get", width: 120 },
              ]}
              rows={rows}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withStyles(styles)(CodeDiscountTab));
