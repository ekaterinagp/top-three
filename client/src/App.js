import React, { Component, Fragment } from "react";
import ArticleProvider from "./context/articleContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./components/AppNavBar";

import "./App.css";
import SendMail from "./components/SendMail";
import AddArticle from "./components/AddArticle";
import Articles from "./containers/Articles";

class App extends Component {
  render() {
    return (
      <div className="navWrapper">
        {/* <Navbar></Navbar> */}
        <Router basename={"/"}>
          <nav>
            <ul>
              <li className="liMenu a">
                <NavLink exact to={`/`} activeClassName="selectedLink">
                  Home
                </NavLink>
              </li>
              <li className="liMenu b">
                <NavLink to={`/login`} activeClassName="selectedLink">
                  Login
                </NavLink>
              </li>
              <li className="liMenu c">
                <NavLink to={`/send-mail`} activeClassName="selectedLink">
                  Send mail
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route
              path={`/login`}
              // component={(state) => <Forecast {...this.state} />}
            />
            <Route
              path={`/send-mail`}
              component={(state) => <SendMail {...this.state} />}
            />
            <Route
              exact
              path={`/`}
              // component={(props) => (
              // <StartPage
              //   {...this.state}
              //   // isLoading={this.state.isLoading}
              // />
              // )}
            />
          </Switch>
        </Router>
        <ArticleProvider>
          <AddArticle />
          <Articles />
        </ArticleProvider>
        {/* <SendMail /> */}
      </div>
    );
  }
}

export default App;
