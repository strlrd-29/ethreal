import React, { Component, Fragment } from "react";
import Media from "react-media";

import { getWebsiteData } from "../redux/actions/userActions";
import TypeIntro from "./TypeIntro";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";

import ItemCard from "./ItemCard";

import FilterSmall from "./FilterSmall";
import FilterLarge from "./FilterLarge";

//image
import noprogram from "../image/noprogram.gif";

// ui

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
          <Grid key={post.pubId} item xs={6} md={4}>
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
        <Grid container justify="center" xs={12} style={{ height: 400 }}>
          <TypeIntro
            store={ourType.store}
            title={ourType.title}
            intro={ourType.description}
            images={ourType.typeImagesUrl[0]}
          />
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
                <Grid container xs={12}>
                  <Grid item xs={3} style={{ padding: 20 }}>
                    <FilterLarge />
                  </Grid>

                  <Grid container xs={9} style={{ padding: 10 }}>
                    {allItems}
                  </Grid>
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
