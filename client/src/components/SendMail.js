import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function SendEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      name: name,
      email: email,
      message: message,
    };

    axios.post("http://localhost:9090/send-email", dataToSubmit);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
          />
          <br></br>
          <input
            id="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
          <br></br>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            className="message-input"
            type="text"
            placeholder="Please write your message here"
            value={message}
            required
          />
          <button onClick={handleSubmit}>Send mail</button>
        </form>
      </header>
    </div>
  );
}
