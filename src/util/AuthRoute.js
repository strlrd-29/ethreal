import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthRoute = ({
  component: Component,
  authenticatedAdmin,
  authenticated,
  path,
}) => {
  return authenticated ? (
    <Redirect to="/user" />
  ) : authenticatedAdmin ? (
    <Redirect to="/admin" />
  ) : (
    <Route exact path={path} component={Component} />
  );
};
const mapStateToProps = (state) => ({
  authenticated: state.user.authonticated,
  authenticatedAdmin: state.user.authenticatedAdmin,
});
AuthRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AuthRoute);
