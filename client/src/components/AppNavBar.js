import React, { Component, Fragment } from "react";
import ArticleProvider from "../context/articleContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   // NavLink,
//   Container,
// } from "reactstrap";
import SendMail from "./SendMail";
import AddArticle from "./AddArticle";
import Articles from "../containers/Articles";

export default class AppNavBar extends Component {
  render() {
    return (
      <div className="navWrapper">
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
              <li className="liMenu c">
                <NavLink to={`/list`} activeClassName="selectedLink">
                  Add list
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route
              path={`/login`}
              // component={(state) => <nameOfcomponent {...this.state} />}
            />
            <Route
              path={`/send-mail`}
              component={(state) => <SendMail {...this.state} />}
            />
            <Route
              path={`/list`}
              render={(props) => (
                <ArticleProvider>
                  {" "}
                  <AddArticle />{" "}
                </ArticleProvider>
              )}
            />
            <Route exact path={`/`} />
          </Switch>
        </Router>
        <ArticleProvider>
          <Articles />
        </ArticleProvider>
      </div>
    );
  }
}
