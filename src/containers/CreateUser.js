import React, {Component} from 'react';
import {connect} from "react-redux";
import './Home.css';

import {accessToken} from "../reducers";
import {createUser} from "../actions/data";

import Wrapper from '../containers/Wrapper';
import Header from '../components/Header';
import CreateUserForm from '../components/CreateUserForm';

class CreateUser extends Component {

    render() {
        return (
            <Wrapper>
                <Header/>
                <div className="row justify-content-center align-items-center" style={{height: '100vh'}}>
                    <CreateUserForm {...this.props}/>
                </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        token: accessToken(state),
    })
};

const mapDispatchToProps = (dispatch) => ({
    createUser: ((token, user) => dispatch(createUser(token, user))),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);