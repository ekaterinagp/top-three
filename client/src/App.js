import React, { Component, Fragment } from "react";
import ArticleProvider from "./context/articleContext";

import "./App.css";
import SendMail from "./components/SendMail";
import AddArticle from "./components/AddArticle";
import Articles from "./containers/Articles";

class App extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <ArticleProvider>
          <AddArticle />
          <Articles />
        </ArticleProvider>
        <SendMail />
      </Fragment>
    );
  }
}

export default App;
