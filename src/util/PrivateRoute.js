import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const AuthRoute = ({
  component,
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
          <Route path={path} component={component} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
const mapStateToProps = (state) => ({
  authenticated: state.user.authonticated,
});
AuthRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AuthRoute);
