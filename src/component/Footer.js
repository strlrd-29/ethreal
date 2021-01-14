import React, { Component } from "react";

import { Link } from "react-router-dom";

//mui
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import Typography from "@material-ui/core/Typography";
import { Button, CardContent } from "@material-ui/core";

export class Footer extends Component {
  render() {
    return (
      <Grid container style={{ padding: 30, backgroundColor: "none" }}>
        <Grid item xs={12} md={6} align="center" style={{ marginBottom: 20 }}>
          <IconButton href="">
            {" "}
            <FacebookIcon style={{ color: "#414042" }} fontSize="large" />
          </IconButton>
          <IconButton>
            {" "}
            <InstagramIcon style={{ color: "#414042" }} fontSize="large" />{" "}
          </IconButton>
          <IconButton>
            {" "}
            <YouTubeIcon style={{ color: "#414042" }} fontSize="large" />{" "}
          </IconButton>
          <IconButton>
            {" "}
            <TwitterIcon style={{ color: "#414042" }} fontSize="large" />{" "}
          </IconButton>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <Typography
            style={{ color: "#414042", fontWeight: "bold", fontSize: "1.2em" }}
          >
            +213 792 938 880
          </Typography>
          <a
            style={{ color: "#7451eb", fontWeight: "bold", fontSize: "1.2em" }}
            target="_blank"
            href="https://mail.google.com/mail/u/0/?hl=fr&view=cm&tf=1&fs=1&to=ishaktobi%40gmail.com"
          >
            ishaktobi@gmail.com
          </a>
        </Grid>
        <Grid item xs={12} align="center" style={{ marginTop: 20 }}>
          <Typography variant="subtitle1" color="textSecondary">
            {" "}
            Copyright 2020 by Ishak Tobbi. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
