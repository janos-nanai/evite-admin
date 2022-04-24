import axios from "axios";

import store from "../store";

export const authReqInterceptor = () => {
  axios.interceptors.request.use(
    (config) => {
      const { accessToken, isLoggedIn } = store.getState().auth;
      console.log("doing intercept stuff 2");
      console.log(accessToken, isLoggedIn);
      if (isLoggedIn) {
        console.log("setting auth header:", `Bearer ${accessToken}`);

        config.headers!.authorization = `Bearer ${accessToken}`;

        console.log(config);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
