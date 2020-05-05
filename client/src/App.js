import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";
import { ArticleContext } from "./context/articleContext";

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import SendMail from "./components/SendMail";
import SingleList from "./components/SingleList";
import ResetPassword from "./components/ResetPassword";
// import AddArticle from "./components/AddArticle";

import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <>
      <BrowserRouter>
        {/* <UserContext.Provider value={{ userData, setUserData }}> */}
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />

            <Route path="/sendMail" component={SendMail} />
            <Route exact path="/list/:listId" component={SingleList} />
            <Route path="/resetPassword" component={ResetPassword} />
          </Switch>
        </div>
        {/* </UserContext.Provider> */}
      </BrowserRouter>
    </>
  );
}
