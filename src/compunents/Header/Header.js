import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Nav, Navbar, Button } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  const history = useHistory();
  const { user, logOut } = useAuth();
 
  const handleLogOut = () => {
    logOut(history);
  };
  return (
<>
    <Navbar 
    collapseOnSelect
    expand="lg"
    className="header p-4"
    // variant="dark"
    sticky="top"
  >
      <Navbar.Brand as={Link} to="/">
    
        <img
          className="header-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPPWcGFIcjLDBxbekDJiEhqetNPaZkWueHw&usqp=CAU"
          alt=""
        />{" "}
        World Photography Day
        </Navbar.Brand>
   
    
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="home"  >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/moreProduct" className="home">
            Explore
            </Nav.Link>
            {user?.email && (
              <>
                <Nav.Link as={Link} to="/dashboard" className="home">
                Dashboard
                </Nav.Link>              
              </>
            )}

            {user.email ? (
              <span>
                <span className="text-white">{user?.displayName}</span>

                <Button onClick={handleLogOut}>Logout</Button>
              </span>
            ) : (
              <Nav.Link as={Link} to="/login" className="home">
                Login
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/register" className="home">
                Register
              </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
  );
};

export default Header;
