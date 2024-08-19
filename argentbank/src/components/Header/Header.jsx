import React from "react";
import { NavLink} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/reducers/authSlice";
import { resetProfile } from "../../redux/reducers/profileSlice";



function Header (){

    const token = useSelector(state => state.auth.token);
    const profile = useSelector((state) => state.profile);
    const userName = profile.userName;
    const dispatch = useDispatch();

    //fonction pour réinitialiser le token et le profile
    const handledSignOut = () => {
        dispatch(setLogout());
        dispatch(resetProfile());
    }

    return(
        <header className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img src={`${process.env.PUBLIC_URL}/imgReact/argentBankLogo.png`} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {token ? (
                <div>
                <NavLink to="/profile" className="main-nav-item main-nav-item-user">
                    <i className="fa fa-user-circle main-nav-icon-user"></i>
                    {userName}
                </NavLink>
                <NavLink to="/" className="main-nav-item" onClick={handledSignOut}>
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