import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '30%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(1),
  },
}));

export default function MenuList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickBoth = () => {
    props.handleChange();
    handleClick();
  };

  let ourTypes = [];
  // console.log

  Object.keys(props.types).map((postType) => {
    if (props.types[postType].store == props.store.title) {
      return ourTypes.push(props.types[postType]);
    }
  });

  let alltypes = ourTypes ? (
    ourTypes.map((post) => {
      return (
        <ListItem
          button
          className={classes.nested}
          style={{ padding: 10, textAlign: "center", verticalAlign: "middle" }}
          onClick={handleClickBoth}
          component={Link}
          to={`/type/${post.title.split(" ").join("_")}`}
        >
          <ListItemText primary={post.title} />
        </ListItem>
      );
    })
  ) : (
    <Grid item xs={12} align="center">
      <h2>NO STORE AVAILABLE</h2>{" "}
    </Grid>
  );

  /*style={ open ? 
      {paddingLeft:0,display:"inline-block",cursor:"pointer",userSelect:"none",borderBottom:"2px #b100e8 solid"}:
      {paddingLeft:0,display:"inline-block",cursor:"pointer",userSelect:"none"}} >*/

  return (
    <div
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p button onClick={handleClick} disableRipple="true">
        <p
          style={
            open
              ? {
                  padding: 0,
                  cursor: "pointer",
                  userSelect: "none",
                  marginBottom: 0,
                  fontSize: "1.5em",
                  borderBottom: "2px #b100e8 solid",
                }
              : {
                  padding: 0,
                  cursor: "pointer",
                  userSelect: "none",
                  fontSize: "1.5em",
                  marginBottom: 0,
                }
          }
        >
          {props.store.title}
        </p>
      </p>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {alltypes}
        </List>
      </Collapse>
    </div>
  );
}
