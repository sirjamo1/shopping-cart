import React from "react";
import { NavLink } from "react-router-dom";
import chartreuseLogoTransparent from "./assets/charteuseLogoTransparent.png";

const NavBar = () => {
 const logo = chartreuseLogoTransparent;
 console.log(logo)
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
