import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../imgReact/argentBankLogo.png"; // Importez l'image


function Header (){
    return(
        <header className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle main-nav-icon-user"></i>
            Sign In
            </NavLink>

        </header>
    );
}

export default Header;