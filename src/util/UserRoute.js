import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import user from "../pages/user";

const UserRoute = ({
  component: Component,
  authenticatedAdmin,
  authenticated,
  path,
  ...rest
}) => {
  console.log(authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Redirect to="/admin" />
        ) : authenticatedAdmin ? (
          <Route exact path={path} component={user} />
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
UserRoute.propTypes = {
  user: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(UserRoute);
