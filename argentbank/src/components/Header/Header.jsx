import React from "react";
import { NavLink, useLocation} from "react-router-dom";
import "./Header.scss";
import logo from "../../imgReact/argentBankLogo.png"; // Importez l'image


function Header (){
    const location = useLocation();

    return(
        <header className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {location.pathname === "/profile" ? (
                <div>
                <NavLink to="/profile" className="main-nav-item main-nav-item-user">
                    <i className="fa fa-user-circle main-nav-icon-user"></i>
                    Tony
                </NavLink>
                <NavLink to="/" className="main-nav-item">
                <i className="fa fa-sign-out main-nav-icon-sign-out"></i>
                Sign Out
                </NavLink>
                </div>
            ) : (
                <NavLink to="/login" className="main-nav-item">
                <i className="fa fa-user-circle main-nav-icon-user"></i>
                Sign In
                </NavLink>
            )}
            
        </header>
    );
}

export default Header;