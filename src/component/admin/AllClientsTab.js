import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//components
import EditItem from "./EditItem";
import BanneUser from "./BanneUser";
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


const rows = [
  {
          id:"1",
          banned:"non",
          nom:"tobbi",
          prenom:"ishak",
          email:"emailemailemail@emailemail.com",
          phone:"0798956654",
          adress:"adress here b14 n 25",
          city:"algerie",
          wilaya:"alger"
    
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
class AllClientsTab extends Component {
  state = {
    cellSelected: false,
    selectedItem: "",
  };
  handleClickCell = (e) => {
    console.log(this.state.selectedItem)
    this.setState({ cellSelected: true });
    this.setState({ selectedItem: e.row });
  };
  componentWillUnmount() {
    this.setState({ cellSelected: false });
   
  }
  render() {
    const { classes, items , } = this.props;
    const newItems = items.map((item) => ({ ...item, id: item.itemId }));

    return (
      <div style={{ width: "100%"  }}>
        
        <Grid container xs={12} direction="row" style={{ paddingBottom: 0 }}>
          
          <BanneUser
            cellSelected={this.state.cellSelected}
            itemId={this.state.selectedItem.itemId}
          />

          
        </Grid>

        
        

        <p style={{ marginTop: 10 }}></p>
        <Divider />
        <p style={{ marginTop: 10 }}></p>

        <DataGrid
        style={{border:"1px red solid"}}
          pageSize="8"
          onRowClick={this.handleClickCell}
          autoHeight
          columns={[

          { field: 'id' },
          { field: 'banned' },
          { field: 'nom' },
          { field: 'prenom' },
          { field: 'email',width:220 },
          { field: 'phone',width:120 },
          { field: 'adress',width:220 },
          { field: 'city' },
          { field: 'wilaya' },
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

export default connect(mapStateToProps)(withStyles(styles)(AllClientsTab));
