import  {React , Component} from 'react';
import { DataGrid } from '@material-ui/data-grid';



import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//mui stuff
import IconButton from '@material-ui/core/IconButton';

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//icons
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const rows = [
  {
    id: 1,
    store: 'food',
    
    title: 'dala3',
    
  },
];



const styles = (theme) => ({
  ...theme.spreadThis,
  itemButton: {
    marginRight:20,
    borderRadius:0,
    textTransform:"none"
  },

})
class TypesTab extends Component {
  state= {
     valueTypes:"1",
     cellSelected:false,
  };
  handleClickTypes = (e)=> {

    if(this.state.cellSelected == true)
    this.setState({cellSelected: false})

    this.setState({valueTypes: e.currentTarget.value})
  }
  
  handleClickCell = (e)=> {
    
    this.setState({cellSelected: true})
  }
  componentWillUnmount(){
    this.setState({cellSelected: false})
  }


  render(){
    const { classes } = this.props;

  return (
    <div style={{ height: 250, width: '100%'}}>
      
      <Grid container xs={12}  direction="row" style={{paddingBottom:20}} >
        <Button      
                     className={classes.itemButton}
                     value="1"
                     color={this.state.valueTypes == 1 ? "secondary":undefined}
                     variant={this.state.valueTypes == 1 ?"contained":undefined} 
                     onClick={this.handleClickTypes}
                     >
                Check types
        </Button>
        <Button      
                     className={classes.itemButton}
                     value="2"
                     color={this.state.valueTypes == 2 ? "secondary":undefined}
                     variant={this.state.valueTypes == 2 ?"contained":undefined} 
                     onClick={this.handleClickTypes}
                     >
                Create new type
        </Button>
        
      </Grid>
      
      <Divider />

      <p style={{marginTop:10}}></p>
      <Grid container xs={12}>
        <Button startIcon={<EditIcon />} 
               
                
                style={this.state.cellSelected ?{marginRight:20,borderRadius:0,backgroundColor:"#0096c7",color:"white"}
                                               :{display:"none"}}>
                                      edit
        </Button>
        <Button startIcon={<DeleteForeverIcon />} 
              
                style={this.state.cellSelected ?{marginRight:20,borderRadius:0,backgroundColor:"#e01e37",color:"white"}
                                               :{display:"none"}}>
                                              delete
        </Button>
      </Grid>
      

      <p style={{marginTop:10}}></p>

      {this.state.valueTypes == 1 ?
      <DataGrid
        pageSize="8"
        onRowSelected={this.handleClickCell}
        autoHeight
        columns={[
          { field: 'id' },
          { field: 'store' },
          { field: 'title', width: 200 },
        ]}
        rows={rows}
      />:
      <p></p>
    }
    {this.state.valueTypes == 2 ?<p>create item</p>:<p></p>}
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  admin: state.user.website[1],
});

export default connect(
  mapStateToProps,
)(withStyles(styles)(TypesTab));
