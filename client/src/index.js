import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux"; //makes sure that store is available
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise"; //to use API
import reducers from "./reducers";

import "./index.css";
import App from "./App";
const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

//store can also be created the following way, instead of in reducers, but in this case remember to bring up defualt state
// const store=createStore(reducers, defaultState, applyMiddleware(promiseMiddleware);

ReactDOM.render(
  // <Provider store={storeWithMiddleware(reducers)}>
  <App />,
  // </Provider>
  document.getElementById("root")
);
