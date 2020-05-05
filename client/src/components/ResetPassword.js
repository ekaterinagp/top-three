import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Error from "./Error";

const ResetPassword = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [error, setError] = useState("");

  const history = useHistory();

  const changeCredentials = async (e) => {
    e.preventDefault();
    try {
      const id = localStorage.getItem("id");
      const credentials = { email, password, newPassword };
      const newPasswordAdded = await axios.post(
        `http://localhost:9090/change-password/${id}`,
        credentials
      );
      console.log(newPasswordAdded);
      history.push("/");
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={changeCredentials} className="change-pass">
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            id="newPassword"
            placeholder="Enter new password"
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button>Reset password</button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
