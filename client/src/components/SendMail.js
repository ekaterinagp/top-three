import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post("http://localhost:9090/send-email", data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  render() {
    return (
      <div className="container">
        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
          <label className="message" htmlFor="message-input">
            Your Message
          </label>
          <textarea
            onChange={(e) => this.setState({ message: e.target.value })}
            name="message"
            className="message-input"
            type="text"
            placeholder="Please write your message here"
            value={this.state.message}
            required
          />

          <label className="message-name" htmlFor="message-name">
            Your Name
          </label>
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            className="message-name"
            type="text"
            placeholder="Your Name"
            value={this.state.name}
          />

          <label className="message-email" htmlFor="message-email">
            Your Email
          </label>
          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            className="message-email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />

          <div className="button-container">
            <button type="submit" className="button button-primary">
              {this.state.buttonText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// // function sendMail() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");

// //   const handleChange = (e) => {
// //     e.preventDefault();
// //     if (e.target.id === "name") {
// //       setName(e.target.value);
// //     } else {
// //       setEmail(e.target.value);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const dataToSubmit = {
// //       name: name,
// //       email: email,
// //     };

// //     axios.post("http://localhost:9090/api/send-mail", dataToSubmit);
// //   };

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <form onSubmit={handleSubmit}>
// //           <input
// //             id="name"
// //             placeholder="name"
// //             value={name}
// //             onChange={handleChange}
// //           />
// //           <br></br>
// //           <input
// //             id="email"
// //             placeholder="email"
// //             value={email}
// //             onChange={handleChange}
// //           />
// //           <br></br>
// //           <button onClick={handleSubmit}>Send mail</button>
// //         </form>
// //       </header>
// //     </div>
// //   );
// // }

// function SendEmail() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleChange = (e) => {
//     e.preventDefault();
//     if (e.target.id === "name") {
//       setName(e.target.value);
//     } else {
//       setEmail(e.target.value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const dataToSubmit = {
//       name: name,
//       email: email,
//     };

//     axios.post("http://localhost:9090/api/send-mail", dataToSubmit);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onSubmit={handleSubmit}>
//           <input
//             id="name"
//             placeholder="name"
//             value={name}
//             onChange={handleChange}
//           />
//           <br></br>
//           <input
//             id="email"
//             placeholder="email"
//             value={email}
//             onChange={handleChange}
//           />
//           <br></br>
//           <button onClick={handleSubmit}>Send mail</button>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default SendMail;
