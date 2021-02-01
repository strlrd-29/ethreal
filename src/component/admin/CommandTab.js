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

const rows = [
  {
    id: 1,
    
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
class CommandTab extends Component {
  state= {
     valueStores:"1",
  };
  handleClickStores = (e)=> {
    this.setState({valueStores: e.currentTarget.value})
  }
  render(){
    const { classes } = this.props;

  return (
    <div style={{ height: 250, width: '100%'}}>
      
      <Grid container xs={12}  direction="row" style={{paddingBottom:20}} >
        <Button      
                     className={classes.itemButton}
                     value="1"
                     color={this.state.valueStores == 1 ? "secondary":undefined}
                     variant={this.state.valueStores == 1 ?"contained":undefined} 
                     onClick={this.handleClickStores}
                     >
                Check stores
        </Button>
        <Button      
                     className={classes.itemButton}
                     value="2"
                     color={this.state.valueStores == 2 ? "secondary":undefined}
                     variant={this.state.valueStores == 2 ?"contained":undefined} 
                     onClick={this.handleClickStores}
                     >
                Create new store
        </Button>
        
      </Grid>
      
      <Divider />
      <p style={{marginTop:20}}></p>
      {this.state.valueStores == 1 ?
      <DataGrid
      
        columns={[
          { field: 'id' },
          { field: 'id' },
          { field: 'title', width: 200 },
          { field: 'id' },
          { field: 'id' },
         
        ]}
        rows={rows}
      />:
      <p></p>
    }
    {this.state.valueStores == 2 ?<p>create item</p>:<p></p>}
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  admin: state.user.website[1],
});

export default connect(
  mapStateToProps,
)(withStyles(styles)(CommandTab));
