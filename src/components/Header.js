import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <ul className="nav nav-pills d-flex justify-content-between mt-3">
        <li className="nav-item bg-secondary">
            <NavLink className="nav-link text-white"
                     to='/'>Home</NavLink>
        </li>
        <li className="nav-item bg-secondary">
            <NavLink className="nav-link text-white" to='/logout'>Logout</NavLink>
        </li>
    </ul>
);

export default Header;