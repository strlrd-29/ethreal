import React, { useEffect } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

//redux
import { useDispatch } from "react-redux";
import { getWebsiteData } from "../redux/actions/userActions";
//image

// ui

import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  ...theme.spreadThis,
});

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWebsiteData());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <Grid container>
      <Grid container>
        <h1>hey you x)</h1>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
