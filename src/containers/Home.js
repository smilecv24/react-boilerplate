import React, {Component} from 'react';
import {connect} from "react-redux";
import './Home.css';

import {getUsers} from "../actions/data";
import {accessToken} from "../reducers";

import Wrapper from '../containers/Wrapper';
import Header from '../components/Header';
import UsersTable from '../components/Table';

class Home extends Component {

    componentWillMount() {
        this.props.getUsers(this.props.token);
        console.log('the test string'.replace(/ /g, '-'));

        const countdown = (value, fn) => {
            fn(value);
            return value > 0 ? countdown(value - 1, fn) : value
        };

        // countdown(10, val => console.log(val));

    }

    render() {
        return (
            <Wrapper>
                <Header />

              {/*  {this.props.users ? this.props.users.map( user =>
                    <div key={user.id}>Email - {user.email}</div>
                ): null}*/}

                {this.props.users ? <UsersTable users={this.props.users}/>: null}

            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        token: accessToken(state),
        users: state.data.users
    })
};

const mapDispatchToProps = (dispatch) => ({
    getUsers: ((token) => dispatch(getUsers(token))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);