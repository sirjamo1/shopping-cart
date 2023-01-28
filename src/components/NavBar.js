import React from "react";
import { NavLink } from "react-router-dom";
import chartreuseLogoTransparent from "./assets/chartreuseLogoTransparent.png";

const NavBar = () => {
 const logo = chartreuseLogoTransparent;
    return (
        <div className="navbar">
            <img src={logo} alt="logo" width="50px"/>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
