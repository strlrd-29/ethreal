import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";

//redux useSelector
import { useSelector } from "react-redux";

//fuse js
import Fuse from "fuse.js";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    // justifyContent:"center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    paddingBottom: 20,
  },
  resize: {
    fontSize: "2em",
  },
  IconButtonDrawer: {
    //  position:"absolute",
    marginTop: 20,
    marginBottom: 20,

    // top:20,
    color: "black",
  },
  link: {
    textDecoration: "none",
    width: "100%",
    color: "black",
    alignSelf: "flex-start",
    padding: "15px",
    textAlign: "center",
    transition: "all 0.1s ease",
    "&:hover": {
      color: "#003668",
    },
    "&:focus": {
      color: "#9500ae",
    },
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
    const [query, setQuery] = useState("");
    const { items } = useSelector((state) => state);
    const options = {
      includeScore: true,
      keys: [
        {
          name: "title",
          weight: 0.7,
        },
        {
          name: "description",
          weight: 0.3,
        },
        {
          name: "type",
          weight: 0.2,
        },
        {
          name: "store",
          weight: 0.2,
        },
      ],
    };
    const fuse = new Fuse(items, options);
    const results = fuse.search(query);

    return (
      <div className={classes.root}>
        <IconButton
          onClick={toggleDrawer("top", false)}
          className={classes.IconButtonDrawer}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <form
          style={{ width: "80%" }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            style={{ width: "100%" }}
            placeholder="Search"
            autoFocus
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        {results &&
          results.map((item) => (
            <Link
              className={classes.link}
              key={item.item.itemId}
              to={`/type/${item.item.type
                .split(" ")
                .join("_")}/${item.item.title.split(" ").join("_")}`}
              onClick={toggleDrawer("top", false)}
            >
              {item.item.title}
            </Link>
          ))}
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
              style={{ transform: "rotate(90deg)", fontSize: "1.1em" }}
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
