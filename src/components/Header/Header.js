import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const activeStyle = {
        color: "#daa520"
    }
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink
                    to="/shop"
                    activeStyle={activeStyle}
                >Shop</NavLink>
                <NavLink
                    to="/review"
                    activeStyle={activeStyle}
                >Order Review</NavLink>
                <NavLink
                    to="/inventory"
                    activeStyle={activeStyle}
                >Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;