import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
  },
  resize: {
    fontSize: "2em",
  },
  IconButtonDrawer: {
    position: "absolute",
    left: "5%",
    color: "black",
  },
});

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  function InputWithIcon() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <IconButton
          onClick={toggleDrawer("top", false)}
          className={classes.IconButtonDrawer}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <form
          style={{ width: "60%", position: "absolute" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ width: "100%" }}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    fontSize="large"
                    style={{ transform: "rotate(90deg)" }}
                  />
                </InputAdornment>
              ),
              classes: {
                input: classes.resize,
              },
            }}
            id="outlined-basic"
            label=""
            variant="outlined"
          />
        </form>
      </div>
    );
  }

  return (
    <div>
      {
        <React.Fragment key={"top"}>
          <IconButton
            onClick={toggleDrawer("top", true)}
            disableRipple="true"
            style={{
              color: "black",
              backgroundColor: "transparent",
              textTransform: "none",
            }}
          >
            <SearchIcon
              fontSize="medium"
              style={{ transform: "rotate(90deg)" }}
            />
          </IconButton>
          <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            <InputWithIcon />
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
