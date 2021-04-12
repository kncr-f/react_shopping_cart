import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import {reducer} from "./reducers/index";
import {Provider} from "react-redux";
import App from "./App";
const store=createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router> 
        <App />
      </Router>
    </Provider>
   
  </React.StrictMode>,
  rootElement
);