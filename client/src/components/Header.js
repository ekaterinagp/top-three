import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

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
    // checkUserLoggedIn();
    // setLoggedIn(false);
  };

  return (
    <header className="header">
      <Link to="/">
        <h1 className="title">Top three in your (bucket) list</h1>
      </Link>
      <div className="auth-options">
        {token ? (
          <>
            <button onClick={logOut}>Log out</button>

            <Link to="/resetPassword" onClick={resetPassword}>
              Reset password
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" onClick={register}>
              Register
            </Link>
            <Link to="/login" onClick={login}>
              Login
            </Link>
          </>
        )}
        <Link to="/sendMail" onClick={sendMail}>
          Send Email{" "}
        </Link>
      </div>
    </header>
  );
}
