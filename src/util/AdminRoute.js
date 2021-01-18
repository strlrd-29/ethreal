import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import admin from "../pages/admin";

const PrivateRoute = ({
  component: Component,
  authenticatedAdmin,
  authenticated,
  path,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Redirect to="/user" />
        ) : authenticatedAdmin ? (
          <Route exact path={path} component={admin} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
const mapStateToProps = (state) => ({
  authenticated: state.user.authonticated,
  authenticatedAdmin: state.user.authenticatedAdmin,
});
PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(PrivateRoute);
