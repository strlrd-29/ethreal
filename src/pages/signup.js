import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
//redux
import { connect } from "react-redux";
import { signup } from "../redux/actions/userActions";

//mui stuff
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

const styles = (theme) => ({
  ...theme.spreadthis,
});

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      handle: "",
      email: "",
      password: "",
      confirmPassword: "",
      condition: false,
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
    if (this.state.condition) {
      const newUserData = {
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        handle: this.state.handle,
      };
      this.props.signup(newUserData, this.props.history);
    } else {
      const err = {
        conditionError:
          "Veuillez cocher cette case si vous souhaitez continuer.",
      };
      this.setState({ errors: err });
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  };
  boxHandleChange = (event) => {
    this.setState({ condition: !this.state.condition });
    console.log(this.state.condition);
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

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
              Inscription
            </Typography>

            {errors.geniral && (
              <Typography color="textPrimary" className={classes.errField}>
                {errors.geniral}
              </Typography>
            )}

            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <TextField
                id="handle"
                type="texte"
                name="handle"
                label="Nom d'utilisateur"
                helperText={errors.handle}
                error={errors.handle ? true : false}
                className={classes.textField}
                value={this.state.handle}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="email"
                type="email"
                name="email"
                label="Email"
                helperText={errors.email}
                error={errors.email ? true : false}
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="password"
                type="password"
                name="password"
                label="Mot de passe"
                helperText={errors.password}
                error={errors.password ? true : false}
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                label="Confirmer le Mot de passe"
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                className={classes.textField}
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                fullWidth
              />
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.link}
              >
                <Checkbox
                  value={!this.state.condition}
                  onChange={this.boxHandleChange}
                  name="condition"
                />
                J'ai lu et j'accepte
                <Link to="/condition">
                  {" "}
                  les Conditions Générales d'Utilisation
                </Link>
                <br />
              </Typography>
              {errors.conditionError && (
                <Typography component={"span"} variant="body2" color="error">
                  Veuillez cocher cette case si vous souhaitez continuer.
                </Typography>
              )}

              <br />
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
                disabled={loading}
              >
                S'INSCRIRE
              </Button>

              <br />
              <small>
                Vous avez déjà un compte ?{" "}
                <Link to="/login">Connectez-vous</Link>{" "}
              </small>
            </form>
          </Card>
        </Grid>
        <Grid item sm xs />
      </Grid>
    );
  }
}
signup.propTypes = {
  classes: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.ui,
});

export default connect(mapStateToProps, { signup })(
  withStyles(styles)(withRouter(Signup))
);
