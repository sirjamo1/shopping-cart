import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
         <h3>Site Name</h3>
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
