import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../redux/actions/userActions";
import noprogram from "../image/noprogram.gif";

//mui stuff

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//icons
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const styles = (theme) => ({
  ...theme.spreadThis,
  userimage: {
    height: 150,
    width: 150,
    margin: 20,
  },

  profile: {
    margin: 20,
  },

  info: {
    marginTop: 10,
    display: "flex",
    alignItem: "center",
  },
  editButton: {
    width: "100%",
    height: 50,
  },
  title: {
    width: "100%",
    textAlign: "center",
    height: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  view: {
    display: "flex",
    alignItems: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  photo: {
    marginTop: 20,
    marginLeft: -10,
  },
  more: {
    marginTop: 10,
    width: "100%",
  },
  progButton: {
    width: "50%",
    height: 50,
  },
  noprogram: {
    height: 150,
    width: 150,
  },
  noProgContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20,
  },
});

class user extends Component {
  state = {
    in: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleMoreItem = () => {
    this.setState({ in: !this.state.in });
  };
  handleLogout = () => {
    this.props.logout(this.props.history);
  };

  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);

    this.props.uploadImage(formData);
  };
  handleClickUpload = () => {
    const upload = document.getElementById("inputPic");
    upload.click();
  };

  render() {
    const {
      classes,
      user: { user },
      loading,
    } = this.props;
    let allMyParcours = (
      <CardContent className={classes.noProgContent}>
        <CardMedia className={classes.noprogram} image={noprogram} />
        <Typography variant="body2" color="textSecondary">
          There are no commands to Show
        </Typography>
      </CardContent>
    );

    return (
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Card className={classes.profile}>
            <Typography
              className={classes.title}
              variant="h5"
              color="textPrimary"
            >
              User information
            </Typography>

            <Divider />
            <CardContent>
              <Typography
                className={classes.info}
                variant="body1"
                color="textSecondary"
              >
                <EmailIcon /> : {user.nom} {user.prenom}
              </Typography>
              <Typography
                className={classes.info}
                variant="body1"
                color="textSecondary"
              >
                <EmailIcon /> : {user.email}
              </Typography>
              <Typography
                className={classes.info}
                variant="body1"
                color="textSecondary"
              >
                <PhoneIcon /> : {user.phone}{" "}
              </Typography>

              <Typography
                className={classes.info}
                variant="body1"
                color="textSecondary"
              >
                <RoomIcon /> : {user.wilaya} {user.city}
              </Typography>
              <Typography
                className={classes.info}
                variant="body1"
                color="textSecondary"
              >
                <RoomIcon /> : {user.adress}
              </Typography>
            </CardContent>

            <Divider />
          </Card>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Card className={classes.profile}>
            <Typography
              className={classes.title}
              variant="h5"
              color="textPrimary"
            >
              Commands information
            </Typography>
            <Divider />
            {allMyParcours}
            <Divider />
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className={classes.profile}>
            <Button
              className={classes.editButton}
              variant="contained"
              style={{ backgroundColor: "#f94144", color: "#fff" }}
              endIcon={<ExitToAppIcon />}
              onClick={this.handleLogout}
            >
              LOGOUT
            </Button>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
const mapActionToProps = {
  logout,
};
const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui,
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(user));
