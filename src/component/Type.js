import React, { Component, Fragment } from "react";
import Media from "react-media";

import { getWebsiteData } from "../redux/actions/userActions";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";

import ItemCard from "./ItemCard";

import FilterSmall from "./FilterSmall";
import FilterLarge from "./FilterLarge";

//image
import noprogram from "../image/noprogram.gif";

// ui

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  ...theme.spreadThis,
  noprogram: {
    height: 250,
    width: 250,
  },
  noProgContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20,
  },
  cardType:{
    width:"100%",
    position:"relative",
  },
  imageType:{
    width:"100%",
    height:200
  },
  cardContent:{
    position:"absolute",
    top:0,
    bottom:0,
    right:0,
    left:0,
    backgroundColor:"rgba(0,0,0,0.5)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }
});
class Type extends Component {
  state = {
    posts: "",
    filterOpen: false,
  };
  handleClickOpen = () => {
    this.setState({ filterOpen: true });
  };

  handleClose = () => {
    this.setState({ filterOpen: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let ourTitle = window.location.href
      .split("http://localhost:3000/type/")
      .join("")
      .replace(/_/g, " ");

    //  console.log("our title")

    // console.log(ourTitle)

    const { classes, types, items } = this.props;

    let ourType;
    let ourItems = [];

    types?.map((post) => {
      if (post.title === ourTitle) {
        return (ourType = post);
      }
      return ourType;
    });

    items?.map((post) => {
      if (post.type === ourType.title) {
        return ourItems.push(post);
      }
      return ourItems;
    });

    let allItems = ourItems[0] ? (
      ourItems?.map((post) => {
        return (
          <Grid key={post.pubId} item xs={6} md={3}>
            <ItemCard key={post.pubId} post={post} />
          </Grid>
        );
      })
    ) : (
      <Grid container direction="column" align="center">
        <div>
          <img className={classes.noprogram} src={noprogram} alt="chilling" />
        </div>
        <Typography variant="body2" color="textSecondary">
          There are no Items to Show
        </Typography>
      </Grid>
    );

    return (
      <Grid container direction="column" alignItems="center">
        <Grid container xs={12} md={10} style={{marginTop:20,marginBottom:30}}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link color="inherit" href="/" >
                  Home
              </Link>
              <Link color="inherit" href={`/collection/${ourType.store}`} >
                  {ourType.store}
              </Link>
              <Typography color="textPrimary">{ourType.title}</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid container justify="center" xs={12} md={10} >
          <Card className={classes.cardType}>
            
            <CardMedia 
                 className={classes.imageType}
                 image={ourType.typeImagesUrl[0]}
                 title={ourType.title}
            />

            <CardContent className={classes.cardContent}>
            <Typography variant="h4" style={{border:"4px #b100e8 solid",padding:10,color:"white"}} >{ourType.title}</Typography>
          </CardContent>
          </Card>
          
           
        </Grid>

        <Media
          queries={{
            small: "(max-width: 799px)",
            large: "(min-width: 799px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <Grid container xs={12}>
                  <FilterSmall />

                  <Grid container xs={12} style={{ padding: 0 }}>
                    {allItems}
                  </Grid>
                </Grid>
              )}
              {matches.large && (
                <Grid container xs={12} justify="center" >
                  
                  <FilterLarge items={ourItems} />
                  
                </Grid>
              )}
            </Fragment>
          )}
        </Media>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  types: state.types,
  items: state.items,
  UI: state.ui,
});

export default connect(mapStateToProps, { getWebsiteData })(
  withStyles(styles)(Type)
);
