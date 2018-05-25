import React, {Component} from 'react';
import {connect} from "react-redux";
import './Home.css';

import {echo} from "../actions/data";
import {accessToken} from "../reducers";

import Wrapper from '../containers/Wrapper';
import Header from '../components/Header';

class Home extends Component {

    componentWillMount() {
        this.props.echo('Bearer ' + this.props.token);
        console.log('the test string'.replace(/ /g, '-'));

        const countdown = (value, fn) => {
            fn(value);
            return value > 0 ? countdown(value - 1, fn) : value
        };

        countdown(10, val => console.log(val));

    }

    render() {
        return (
            <Wrapper>
                <Header />

                <div>{this.props.data ? this.props.data.test : 'No data'}</div>

            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        token: accessToken(state),
        data: state.data.data
    })
};

const mapDispatchToProps = (dispatch) => ({
    echo: ((token) => dispatch(echo(token))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);