import React, { Component, Fragment } from "react";
import Media from "react-media";

import { getWebsiteData } from "../redux/actions/userActions";
import StoreImage from "./StoreImage";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";

import ItemCard from "./ItemCard";
import TypeCard from "./TypeCard";


import FilterSmall from "./FilterSmall";
import FilterLarge from "./FilterLarge";

//image
import noprogram from "../image/noprogram.gif";

//icon
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
// ui
import IconButton from '@material-ui/core/IconButton';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
});
class Store extends Component {
  state = {
    posts: "",
    filterOpen: false,
    filterType:""
  };
  handleClickOpen = () => {
    this.setState({ filterOpen: true });
  };

  handleClose = () => {
    this.setState({ filterOpen: false });
  };
  handleClickFilter = (e)=> {
    this.setState({ filterType: e.target.value });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let ourTitle = window.location.href
      .split("http://localhost:3000/collection/")
      .join("")
      .replace(/_/g, " ");

    //  console.log("our title")

    // console.log(ourTitle)

    const { classes, types,stores, items } = this.props;

    let ourStore;
    let ourTypes = [];
    let ourItems = [];

    stores?.map((post) => {
      if (post.title === ourTitle) {
        return (ourStore = post);
      }
      return ourStore;
    });

    items?.map((post) => {
      if (post.store === ourStore.title) {
        return ourItems.push(post);
      }
      return ourItems;
    });

    types?.map((post) => {
      if (post.store === ourStore.title) {
        return ourTypes.push(post);
      }
      return ourTypes;
    });

    let allTypes = ourTypes[0] ? (
      ourTypes?.map((post) => {
        return (
          <Grid key={post.pubId} item xs={12} md={4}>
            <TypeCard key={post.pubId} post={post} />
          </Grid>
        );
      })
    ) : (
      <Grid container direction="column" align="center">
        <div>
          <img className={classes.noprogram} src={noprogram} alt="chilling" />
        </div>
        <Typography variant="body2" color="textSecondary">
          There are no store to Show
        </Typography>
      </Grid>
    );

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
      <Grid container>
        <Grid container justify="center" xs={12} style={{ height: 600 }}>
        <StoreImage  itemStore={ourStore.title} itemImages={ourStore.storeImagesUrl}  /> 
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
                  <Grid container xs={10} style={{ padding: 12 }}>
                    {allTypes}
                  </Grid>
                  <Grid container xs={12} style={{ padding: 0 }}>
                    {allItems}
                  </Grid>
                </Grid>
              )}
              {matches.large && (
                <Grid container xs={12} direction='column' alignItems="center" >
                 

                  <Grid container xs={10} style={{ padding: 12 }}>
                    {allTypes}
                  </Grid>
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
  stores: state.stores,
  items: state.items,
  UI: state.ui,
});

export default connect(mapStateToProps, { getWebsiteData })(
  withStyles(styles)(Store)
);
