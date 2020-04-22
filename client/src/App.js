import React, { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";
import SendMail from "./components/SendMail";

class App extends Component {
  render() {
    return <SendMail />;
  }
}

export default App;

// function App() {
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

// export default App;
