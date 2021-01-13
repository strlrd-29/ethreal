import React from 'react'
import {Route , Redirect} from 'react-router-dom'
import {connect}  from 'react-redux';
import PropTypes  from 'prop-types'

export const AuthRoute = ({component : Component , authenticated , ...rest}) => {
    return <Route
    {...rest}
    render={(props)=>
    authenticated === true ? <Redirect to="/teaching" /> : <Component {...props} />
}
/>
};

const mapStateToProps = (state) => ({
    authenticated : state.user.authonticated
});
AuthRoute.propTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(AuthRoute);