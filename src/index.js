import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import history from "./utils/history";
import rootStore from "./store/RootStore";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider {...rootStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
