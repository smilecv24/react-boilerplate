import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import Wrapper from '../containers/Wrapper';
import LoginForm from '../components/LoginForm'
import {login} from '../actions/auth'
import {authErrors, isAuthenticated} from '../reducers'

const Login = (props) => {
    if (props.isAuthenticated) {
        return (
            <Redirect to='/'/>
        )
    } else {
        return (
            <Wrapper>
                <div className="row justify-content-center align-items-center" style={{height: '100vh'}}>
                    <LoginForm {...props}/>
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: authErrors(state),
    isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        dispatch(login(username, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
