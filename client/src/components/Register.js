import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";
import Error from "./Error";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [error, setError] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, firstName, lastName };
      await axios.post("http://localhost:9090/register", newUser);
      const loginRes = await axios.post("http://localhost:9090/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
    }
  };
  return (
    <div className="page-form">
      <h2>Register</h2>
      {error && <Error error={error} clearError={() => setError("")} />}
      <form onSubmit={submit}>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="register-firstName">First Name</label>
        <input
          id="register-firstName"
          type="text"
          onChange={(e) => setfirstName(e.target.value)}
        />
        <label htmlFor="register-lastName">Last Name</label>
        <input
          id="register-lastName"
          type="text"
          onChange={(e) => setlastName(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
