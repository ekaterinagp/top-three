import React, { useState, useEffect, useContext } from "react";
import { useHistory, NavLink as RRNavLink } from "react-router-dom";

import axios from "axios";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    token: "",
    id: "",
  });
  const history = useHistory();

  useEffect(() => console.log(userData), [userData]);
  const checkUserLoggedIn = async () => {
    if (token) {
      const tokenRes = await axios.post(
        "http://localhost:9090/tokenIsValid",

        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setLoggedIn(true);
      console.log(tokenRes);
    } else {
      setLoggedIn(false);
    }
  };
  const token = localStorage.getItem("auth-token");
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const sendMail = () => history.push("/sendMail");
  const resetPassword = () => history.push("/resetPassword");

  const logOut = () => {
    setUserData({
      token: undefined,
      id: undefined,
    });
    localStorage.setItem("auth-token", "");
    localStorage.setItem("id", "");
    window.location.reload();
  };

  return (
    <div>
      <Navbar color="dark" light expand="md" dark>
        <NavbarBrand href="/">Top three in your (bucket) list</NavbarBrand>
        <Nav className="mr-auto" navbar>
          {token ? (
            <>
              <Button color="primary" onClick={logOut}>
                Log out
              </Button>
              <NavItem>
                <NavLink
                  to="/resetPassword"
                  activeClassName="active"
                  tag={RRNavLink}
                  onClick={resetPassword}
                >
                  Reset password
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink
                  to="/register"
                  activeClassName="active"
                  tag={RRNavLink}
                  onClick={register}
                >
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/login"
                  activeClassName="active"
                  tag={RRNavLink}
                  onClick={login}
                >
                  Log in
                </NavLink>
              </NavItem>
            </>
          )}

          <NavItem>
            <NavLink
              tag={RRNavLink}
              activeClassName="ctive"
              to="/sendMail"
              onClick={sendMail}
            >
              Send Email
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
