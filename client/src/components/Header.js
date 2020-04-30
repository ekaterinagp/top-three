import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
import SendEmail from "./SendMail";
import ArticleProvider from "../context/articleContext";
// import AddArticle from "./AddArticle";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem("auth-token");
      const tokenRes = await axios.post(
        "http://localhost:9090/tokenIsValid",
        null,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setLoggedIn(tokenRes.data);
    };
    checkUserLoggedIn();
  }, [userData]);

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const sendMail = () => history.push("/sendMail");

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <header className="header">
      <Link to="/">
        <h1 className="title">Top three in your (bucket) list</h1>
      </Link>
      <div className="auth-options">
        {loggedIn ? (
          <button onClick={logOut}>Log out</button>
        ) : (
          <>
            <Link to="/register" onClick={register}>
              Register
            </Link>
            <Link to="/login" onClick={login}>
              Login
            </Link>
            <Link to="/sendMail" onClick={sendMail}>
              Send Email{" "}
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
