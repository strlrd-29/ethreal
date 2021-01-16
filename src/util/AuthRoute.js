import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const AuthRoute = ({ component, authenticated, role, path }) => {
  console.log(authenticated);
  return !authenticated ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/user" />
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authonticated,
});
AuthRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AuthRoute);
