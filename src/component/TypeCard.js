import React, { Component } from "react";

import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";

//mui stuff
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import store from "../redux/store";
import { addToCart } from "../redux/actions/cartActions";
import { connect } from "react-redux";

const styles = {
  card: {
    maxWidth: 800,
    margin: "auto",
    margin: 10,
    minHeight: 300,
    display: "flex",
    position:"relative",
    //flexDirection:"row-reverse",
    justifyContent: "space-between",

    flexWrap: "wrap",
    
  },

  content: {
    position: "absolute",
     top:0,
     left:0,
     bottom:0,
     right:0,
     
    display: "flex",
    justifyContent:'center',
    alignItems:"center",
    
   
    //  alignItems:"flex-end",
  },
  content2: { 
    
//width:"100%",
     padding:20,
     backgroundColor:'rgba(0,0,0,0.7)',
    textAlign:"center",
    color:"white",
    // backgroundColor: "#7451eb",
    //flexDirection:"row-reverse",
  },

  item: {
    height: 50,
    display: "flex",
    alignItems: "center",
  },
  imageItem: {
    width: "100%",
    height: 400,
    
  },
};
class TypeCard extends Component {
  state = {
    shadow: false,
    apear: true,
    adminError: false,
  };

  onMouseOver = () => this.setState({ shadow: true });
  onMouseOut = () => this.setState({ shadow: false });
  handleAdd = (item) => {
    if (this.props.authenticatedAdmin) {
      this.setState({ adminError: true });
    } else {
      store.dispatch(addToCart(item));
    }
  };

  render() {
    const {
      classes,
      post: {
        title,
        
        typeImagesUrl,
       
      },
    } = this.props;
    const type = {
      title,
      
      typeImagesUrl,
     
    };

   

    return (
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
          position: "relative",
        }}
        className={classes.card}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
       // raised={this.state.shadow}

        component={Link}
          to={`/type/${title
            .split(" ")
            .join("_")}`}
      >
        

          <CardMedia
            className={classes.imageItem}
            image={typeImagesUrl[0]}
            title={title}
          />

         <CardActions className={classes.content} style={this.state.shadow? {backgroundColor:"rgba(250,250,250,0.2)"}:{}} >

            <Typography variant="h4" className={classes.content2} >
              {title}
            </Typography>
 
          </CardActions>
          
        
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({
  authenticatedAdmin: state.user.authenticatedAdmin,
});

export default connect(mapStateToProps)(withStyles(styles)(TypeCard));
