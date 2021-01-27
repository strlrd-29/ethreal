import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import ItemCard from "./ItemCard";
import ItemCardOne from "./ItemCardOne";

//image
import noprogram from "../image/noprogram.gif";
//icon
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
// ui
import IconButton from "@material-ui/core/IconButton";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
    margin: theme.spacing(0),
    minWidth: 120,
    marginRight: 15,
  },
});
export class FilterLarge extends Component {
  state = {
    filterType: "",
    size: 3,
    itemsCount: this.props.items.length,
  };

  handleChange = (e) => {
    this.setState({ filterType: e.target.value });
  };
  render() {
    console.log(this.state.itemsCount);
    const { classes, items } = this.props;
    if (this.state.filterType === 10) {
      items.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (this.state.filterType === 20) {
      items.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (this.state.filterType === 30) {
      items.sort(function (a, b) {
        var x = a.createdAt.toLowerCase();
        var y = b.createdAt.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    }
    if (this.state.filterType === 40) {
      items.sort(function (a, b) {
        var x = a.createdAt.toLowerCase();
        var y = b.createdAt.toLowerCase();
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      });
    }
    if (this.state.filterType === 50) {
      items.sort(function (a, b) {
        const x = a.title.toLowerCase();
        const y = b.title.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    }
    if (this.state.filterType === 60) {
      items.sort(function (a, b) {
        const x = a.title.toLowerCase();
        const y = b.title.toLowerCase();
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });
    }
    if (this.state.filterType === 70) {
      items.sort(function (a, b) {
        return b.bestSell - a.bestSell;
      });
    }
    if (this.state.filterType === 80) {
      this.state.itemsCount = 5;
    }
    if (this.state.filterType === 90) {
      this.state.itemsCount = 6;
    }
    if (this.state.filterType === 100) {
      this.state.itemsCount = 7;
    }

    let allItems = items[0] ? (
      this.props.items.map((post, i) => {
        if (i < this.state.itemsCount) {
          return (
            <Grid key={post.pubId} item xs={6} md={this.state.size}>
              <ItemCard key={post.pubId} post={post} />
            </Grid>
          );
        }
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

    let allItemsOne = items[0] ? (
      this.props.items.map((post, i) => {
        if (i < this.state.itemsCount) {
          return (
            <Grid key={post.pubId} item xs={12}>
              <ItemCardOne key={post.pubId} post={post} />
            </Grid>
          );
        }
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
      <Grid container xs={12} direction="column" alignItems="center">
        <Grid
          container
          xs={10}
          style={{ padding: 0, marginTop: 50, backgroundColor: "#f5f3f4" }}
        >
          <Grid container xs={12} md={6}>
            <IconButton
              aria-label="ViewListIcon"
              style={{ backgroundColor: "transparent", textTransform: "none" }}
              onClick={() => this.setState({ size: 1 })}
            >
              <ViewListIcon style={{ fontSize: "2em" }} />
            </IconButton>
            <IconButton
              aria-label="ViewListIcon"
              style={{ backgroundColor: "transparent", textTransform: "none" }}
              onClick={() => this.setState({ size: 6 })}
            >
              <ViewStreamIcon
                style={{
                  transform: "rotate(90deg)",
                  fontSize: "1.7em",
                  marginBottom: 4,
                }}
              />
            </IconButton>
            <IconButton
              aria-label="ViewListIcon"
              style={{ backgroundColor: "transparent", textTransform: "none" }}
              onClick={() => this.setState({ size: 4 })}
            >
              <ViewColumnIcon style={{ fontSize: "2.2em" }} />
            </IconButton>
            <IconButton
              aria-label="ViewListIcon"
              style={{ backgroundColor: "transparent", textTransform: "none" }}
              onClick={() => this.setState({ size: 3 })}
            >
              <ViewComfyIcon style={{ fontSize: "2em" }} />
            </IconButton>
          </Grid>
          <Grid container xs={12} md={6} justify="flex-end" alignItems="center">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Sort by
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.age}
                onChange={this.handleChange}
                label="Age"
              >
                <MenuItem value={10}>Price : low to high</MenuItem>
                <MenuItem value={20}>Price : hight to low</MenuItem>
                <MenuItem value={30}>Date : old to new</MenuItem>
                <MenuItem value={40}>Date : New to old</MenuItem>
                <MenuItem value={50}>Alphabitically : A-Z</MenuItem>
                <MenuItem value={60}>Alphabitically : Z-A</MenuItem>
                <MenuItem value={70}>Best Selling</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Items
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.age}
                onChange={this.handleChange}
                label="Age"
              >
                <MenuItem value={80}>5</MenuItem>
                <MenuItem value={90}>6</MenuItem>
                <MenuItem value={100}>7</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container xs={10} style={{ padding: 10 }}>
          {this.state.size === 1 ? allItemsOne : allItems}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FilterLarge);
