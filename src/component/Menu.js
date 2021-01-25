import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuList from "./MenuList";

//mui
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 4,
  },
  container: {
    display: "flex",
  },
  paper: {},
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  let allStores = props.storesData ? (
    Object.keys(props.storesData).map((post) => {
      return (
        <MenuList
          store={props.storesData[post]}
          types={props.types}
          handleChange={handleChange}
        />
      );
    })
  ) : (
    <Grid item xs={12} align="center">
      <h2>NO STORE AVAILABLE</h2>
    </Grid>
  );

  return (
    <div>
      <IconButton onClick={handleChange} 
        style={{backgroundColor: "transparent",
                textTransform: "none"}} >
        <MenuIcon fontSize="large" style={{ color: "#2b2d42" }} />
      </IconButton>

      <Fade in={checked}>
        <Paper elevation={4} className={classes.paper} className={classes.root}>
          <Grid container justify="center" xs={12} style={{ marginTop: 20 }}>
            <IconButton onClick={handleChange}>
              <CloseIcon fontSize="large" style={{ color: "#2b2d42" }} />
            </IconButton>
          </Grid>
          <Grid container xs={12} direction="column" alignItems="center">
            {allStores}
          </Grid>
        </Paper>
      </Fade>
    </div>
  );
}
