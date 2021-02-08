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
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//icons
import ClearIcon from '@material-ui/icons/Clear';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";


const rows = [
  {
          id:"1",
          rate:"3",
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
    selectedUser: "",
    reportInfo:false,
  };
  handleClickCell = (e) => {
    console.log(this.state.selectedUser)
    this.setState({ cellSelected: true });
    
    this.setState({ selectedUser: e.row });
  };
  
  handleClickReportInfo = ()=> {
    
    this.setState({reportInfo: !this.state.reportInfo})
  }
  componentWillUnmount() {
    this.setState({ cellSelected: false });
   
  }
  render() {
    const { classes, items , } = this.props;
    //const newItems = items.map((item) => ({ ...item, id: item.itemId }));

    return (
      
      <div style={{ width: "100%" ,height: 350 }}>
        <Grid container xs={12} direction="row" style={{ paddingBottom: 0 }}>
          
          <BanneUser
            cellSelected={this.state.cellSelected}
            UserId={this.state.selectedUser.UserId}
          />

          
        </Grid>

        
        

        <p style={{ marginTop: 10 }}></p>
        <Divider />
        <p style={{ marginTop: 10 }}></p>

        <Grid container xs={12} style={{height:"100%"}}>
        <Grid container xs={this.state.reportInfo?(7):(12)} style={{height:"100%"}} direction="column">
        <Typography variant="h6" style={{marginBottom:10}} >Customers Informations</Typography>

        <DataGrid
        onRowClick={(e)=>{this.handleClickCell(e);this.handleClickReportInfo();}}
        columns={[
          { field: 'id' ,width:70},
          { field: 'nom' },
          { field: 'prenom' },
          { field: 'email',width:220 },
          { field: 'phone',width:120 },
          { field: 'rate',width:150 ,
          renderCell: (params) => (
            <strong>
              
              <Rating
              readOnly 
              name="customized-empty"
              defaultValue={2}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </strong>)
        },
          { field: 'adress',width:220 },
          { field: 'city' },
          { field: 'wilaya' },
          
          
         
        ]}
        rows={rows}
       />
      </Grid>

      <Grid container xs={5} style={this.state.reportInfo ? {paddingLeft:10,height:"100%"}:{display:"none"}} direction="column" justify="flex-start" >
        <Grid  container direction="row" justify="space-between" alignItems="flex-start"  >
          <Typography variant="h6" style={{marginBottom:10}} >Customer Report</Typography>
          <IconButton aria-label="ignore"
                      size="small"
                      style={{borderRadius:0}}
                                  onClick={this.handleClickReportInfo} >
                          <ClearIcon style={{fontSize:"1.6em"}} />
           </IconButton>
        </Grid>
      
      
      <Card>
        <Grid container direction="row" justify="space-between" xs={12} style={{padding:20}} >
           <Rating
           readOnly 
              name="customized-empty"
              defaultValue={2}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
           />
           <Button
        startIcon={<DeleteForeverIcon />}
        
        style={{
                marginRight: 20,
                borderRadius: 0,
                backgroundColor: "#e01e37",
                color: "white",
              }}
      >
        delete 
      </Button>
        </Grid>
        <Grid container xs={12}>
          <CardContent  >
          <Typography style={{height:150,overflowY:"scroll",padding:10,border:"3px black solid"}}>
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              hello i dont like it u r trash noobs
              
             
             

          </Typography>
        </CardContent>
        </Grid>
        
      </Card>

      </Grid>
      </Grid>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(withStyles(styles)(AllClientsTab));
