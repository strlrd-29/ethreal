import { React, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//components
import DeleteAutoDiscount from "./DeleteAutoDiscount";
import CreateAutoDiscount from "./CreateAutoDiscount";

//mui stuff
import IconButton from "@material-ui/core/IconButton";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//icon
import ClearIcon from '@material-ui/icons/Clear';


const rows = [
  {
          id:"1",
         
          
          start:"21 12 2020",
          end:"21 12 2021",
         
          amount:3000,
          quantity:20,
          type:"buy x get y",
          buy:"healthy meal",
          get:"healthy plats",
          
    
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
class AutoDiscountTab extends Component {
  state = {
    cellSelected: false,
    autoInfo: false,
    selectedItem: "",
  };
  handleClickCell = (e) => {
    console.log(this.state.selectedItem)
    this.setState({ cellSelected: true });
    this.setState({ selectedItem: e.row });
  };
  
  handleClickAutoInfo = ()=> {
    
    this.setState({autoInfo: !this.state.autoInfo})
  }
  componentWillUnmount() {
    this.setState({ cellSelected: false });
   
  }
  render() {
    const { classes, items , } = this.props;
    const newItems = items.map((item) => ({ ...item, id: item.itemId }));

    return (
      <div style={{ width: "100%" ,height:350 }}>
        
        <Grid container xs={12} direction="row" style={{ paddingBottom: 0 }}>
          <CreateAutoDiscount />
          <DeleteAutoDiscount
            cellSelected={this.state.cellSelected}
            itemId={this.state.selectedItem.itemId}
          />

          
        </Grid>

        
        

        <p style={{ marginTop: 10 }}></p>
        <Divider />
        <p style={{ marginTop: 10 }}></p>

        <Grid container xs={12} style={{height:"100%"}}>
        <Grid container xs={this.state.autoInfo?(4):(7)} style={{height:"100%"}} direction="column">
        <Typography variant="h6" style={{marginBottom:10}} >Discount Auto</Typography>

        <DataGrid
        onRowClick={(e)=>{this.handleClickCell(e);this.handleClickAutoInfo()}}
        columns={[
          { field: 'id',width:70 },
         
          { field: 'start' ,width:120 },
          { field: 'end' ,width:120 },
          
          
         
        ]}
        rows={rows}
       />
      </Grid>

      <Grid container xs={8} style={this.state.autoInfo ? {paddingLeft:10,height:"100%"}:{display:"none"}} direction="column" justify="flex-start" >
        <Grid  container direction="row" justify="space-between" alignItems="flex-start"  >
          <Typography variant="h6" style={{marginBottom:10}} >Discount Auto Informations</Typography>
          <IconButton aria-label="ignore"
                      size="small"
                      style={{borderRadius:0}}
                                  onClick={this.handleClickAutoInfo} >
                          <ClearIcon style={{fontSize:"1.6em"}} />
           </IconButton>
        </Grid>
      
      
      <DataGrid
      
      columns={[
        
          
      
        
       
        { field: 'amount' },
        { field: 'quantity' },
        { field: 'type' ,width:120 },
        { field: 'buy' ,width:120 },
        { field: 'get' ,width:120 },
       
      ]}
      rows={rows}
    />
      </Grid>
      </Grid>

        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(withStyles(styles)(AutoDiscountTab));
