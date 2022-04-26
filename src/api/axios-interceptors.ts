import axios from "axios";

import store from "../store";

export const authReqInterceptor = () => {
  axios.interceptors.request.use(
    (config) => {
      const { accessToken, isLoggedIn } = store.getState().auth;

      if (isLoggedIn) {
        config.headers!.authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
