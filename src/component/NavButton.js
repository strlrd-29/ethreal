import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link } from "react-router-dom";

import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 10,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  let ourTypes = [];

  Object.keys(props.types).map((postType) => {
    if (props.types[postType].store == props.store.title) {
      return ourTypes.push(props.types[postType]);
    }
  });

  let alltypes = ourTypes ? (
    ourTypes.map((post) => {
      return (
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={`/type/${post.title.split(" ").join("_")}`}
        >
          {post.title}
        </MenuItem>
      );
    })
  ) : (
    <Grid item xs={12} align="center">
      <h2>NO STORE AVAILABLE</h2>{" "}
    </Grid>
  );

  return (
    <div className={classes.root}>
      <div onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
        <Button
          component={Link}
          to={`/collection/${props.store.title.split(" ").join("_")}`}

          disableRipple="true"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          variant={open ? "outlined" : ""}
          // color="primary"
          style={
            open
              ? {
                  backgroundColor: "transparent",
                  textTransform: "none",
                  fontSize: "1.3em",
                }
              : {
                  backgroundColor: "transparent",
                  textTransform: "none",
                  fontSize: "1.3em",
                }
          }
          // onClick={handleToggle}
        >
          {props.store.title}
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ marginTop: 10, zIndex: 3 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow" //onKeyDown={handleListKeyDown}
                    MenuListProps={{ onMouseLeave: handleListKeyDown }}
                  >
                    {alltypes}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
