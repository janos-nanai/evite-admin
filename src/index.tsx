import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";

import App from "./App";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

axios.interceptors.request.use(
  (config) => {
    const { accessToken, isLoggedIn } = store.getState().auth;
    console.log("doing intercept stuff");
    console.log(accessToken, isLoggedIn);
    if (isLoggedIn) {
      console.log("setting auth header:", `Bearer ${accessToken}`);

      config.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
