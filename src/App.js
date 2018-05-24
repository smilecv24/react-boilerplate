import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import {echo} from "./actions/data";
import {connect} from "react-redux";
import {accessToken} from "./reducers";

class App extends Component {

    componentDidMount() {
        this.props.echo('Bearer ' + this.props.token);
    }

  render() {
    return (
        <ul className="nav nav-pills d-flex justify-content-between mt-3">
            <li className="nav-item bg-secondary">
                <NavLink className="nav-link text-white" to='/'>Home {this.props.data ? this.props.data.test: 'No data'}</NavLink>
            </li>
            <li className="nav-item bg-secondary">
                <NavLink className="nav-link text-white" to='/logout'>Logout</NavLink>
            </li>
        </ul>
    );
  }
}

const mapStateToProps = (state) => {
    return ({
    token: accessToken(state),
    data: state.data.data
})};

const mapDispatchToProps = (dispatch) => ({
    echo: ((token) => dispatch(echo(token))),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);