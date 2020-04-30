import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";
import Error from "./Error";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [error, setError] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email, password, firstName, lastName };
      const loginRes = await axios.post(
        "http://localhost:9090/login",
        loginData
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      console.log(loginData);
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
    }
  };

  return (
    <div className="page-form">
      <h2>Log in</h2>
      {error && <Error error={error} clearError={() => setError("")} />}
      <form onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}
