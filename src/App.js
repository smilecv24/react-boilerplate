import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <ul className="nav nav-pills d-flex justify-content-between mt-3">
            <li className="nav-item bg-secondary">
                <NavLink className="nav-link text-white" to='/'>Home</NavLink>
            </li>
            <li className="nav-item bg-secondary">
                <NavLink className="nav-link text-white" to='/logout'>Logout</NavLink>
            </li>
        </ul>
    );
  }
}

export default App;
