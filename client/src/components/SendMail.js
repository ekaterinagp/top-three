import React, { useState } from "react";
import axios from "axios";

export default class SendMail extends React.Component {
  createForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
      e.preventDefault();
      if (e.target.id === "name") {
        setName(e.target.value);
      } else {
        setEmail(e.target.value);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const dataToSubmit = {
        name: name,
        email: email,
      };

      axios.post("api/send-mail", dataToSubmit);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
          />
          Name
          <input
            id="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
          Email
          <button onClick={handleSubmit}>Send mail</button>
        </form>
      </div>
    );
  };
}
