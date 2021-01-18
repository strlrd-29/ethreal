import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

import { Link, withRouter } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { signIn } from "../redux/actions/userActions";

//mui stuff
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  ...theme.spreadthis,
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",

      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signIn(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      UI: { loading, errors },
    } = this.props;

    return (
      <Grid container className="sign">
        <Grid item sm xs />
        <Grid item sm={5} xs={10}>
          <Card className={classes.Card}>
            {loading && (
              <LinearProgress
                size={30}
                color="secondary"
                className={classes.spiner}
              />
            )}
            <Typography
              variant="h4"
              style={{ color: "#414042" }}
              className={classes.title}
            >
              Connexion
            </Typography>

            {errors && (
              <Typography color="textPrimary" className={classes.errField}>
                Wrong credentials please try again
              </Typography>
            )}

            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                required
                size="medium"
                id="email"
                type="email"
                name="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
                autoFocus
              />

              <TextField
                required
                id="password"
                type="password"
                name="password"
                label="Mot de passe"
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleChange}
                autoComplete="current-password"
                fullWidth
              />
              <Typography variant="body2" className={classes.link}>
                <Link to="/">Mot de passe oublié ?</Link>
              </Typography>
              <br />

              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
                disabled={loading}
              >
                SE CONNECTER
              </Button>

              <br />
              <small>
                Vous n'avez pas un compte ?{" "}
                <Link to="/signup">Inscrivez-vous</Link>{" "}
              </small>
            </form>
          </Card>
        </Grid>
        <Grid item sm xs />
      </Grid>
    );
  }
}
login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.ui,
});

export default connect(mapStateToProps, { signIn })(
  withStyles(styles)(withRouter(login))
);
