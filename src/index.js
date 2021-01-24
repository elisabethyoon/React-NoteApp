import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import history from "./utils/history";
import RootStore from "./store/RootStore";
import { Provider } from "mobx-react";

const store = new RootStore();

ReactDOM.render(
  <Provider {...store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
