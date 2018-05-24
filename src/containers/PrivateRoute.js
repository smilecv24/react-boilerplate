import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import * as reducers from '../reducers'

const PrivateRoute = ({ component: Component, isAuthenticated, isAccessTokenxpired, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated && !isAccessTokenxpired ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)
const mapStateToProps = (state) => ({
    isAuthenticated: reducers.isAuthenticated(state),
    isAccessTokenxpired: reducers.isAccessTokenxpired(state)
})

export default connect(mapStateToProps)(PrivateRoute);