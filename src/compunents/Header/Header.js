import React from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const activeStyle = {
    fontWeight: "bold",
    color: "white",
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark ">
      <Link to="/" className="text-white">
        <img
          className="header-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPPWcGFIcjLDBxbekDJiEhqetNPaZkWueHw&usqp=CAU"
          alt=""
        />{" "}
        World Photography Day
      </Link>
      <div className="navbar-nav  ms-auto">
        <NavLink className="NavLink" to="/home" activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink
          className="NavLink"
          to="/moreProduct"
          activeStyle={activeStyle}
        >
          MoreProduct
        </NavLink>
        <NavLink className="NavLink" to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
        <NavLink className="NavLink" to="/contact" activeStyle={activeStyle}>
          Contact
        </NavLink>
        {user.email ? (
          <span className="logoutbtn" onClick={logOut}>
            Log out
          </span>
        ) : (
          <>
            <Link className="NavLink" to="/login">
              Log in
            </Link>
            <Link className="NavLink" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
