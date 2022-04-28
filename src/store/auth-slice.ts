import { AuthState } from "../types/store-types";

import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  adminId: "",
  accessToken: "",
  refreshToken: "",
  isLoading: false,
};

const API_URL = process.env.REACT_APP_BACKEND_ENTRY_POINT;

const namespace = "auth";

export const login = createAsyncThunk(
  `${namespace}/login`,
  async (args: { adminId: string; adminPass: string }) => {
    const response = await axios.post(`${API_URL}/auth/admin-login`, args);
    const { refreshToken } = response.data;
    localStorage.setItem("localAuthData", JSON.stringify({ refreshToken }));
    return response.data;
  }
);

// export const refreshAccessToken = createAsyncThunk(
//   `${namespace}/refreshAccessToken`,
//   async (token: string) => {
//     const response = await axios.post(`${API_URL}/auth/token`, token);
//     return response.data;
//   }
// );

export const logout = createAsyncThunk(
  `${namespace}/logout`,
  async (refreshToken: string) => {
    await axios.post(`${API_URL}/auth/logout`, refreshToken);
    localStorage.removeItem("localAuthData");
  }
);

const authSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    restoreAuthState(state, action) {
      const { refreshToken } = action.payload;
      state.refreshToken = refreshToken;
      state.isLoading = false;
    },
    refreshAccessToken(state, action) {
      const { adminId, accessToken } = action.payload;

      state.isLoading = false;
      state.adminId = adminId;
      state.accessToken = accessToken;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      const { adminId, accessToken, refreshToken } = action.payload;
      state.adminId = adminId;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });

    // refreshAccessToken
    // builder.addCase(refreshAccessToken.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   const { adminId, accessToken } = action.payload;
    //   state.adminId = adminId;
    //   state.accessToken = accessToken;
    //   state.isLoggedIn = true;
    // });
    // builder.addCase(refreshAccessToken.rejected, (state) => {
    //   state.isLoading = false;
    // });

    // logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.adminId = "";
      state.accessToken = "";
      state.refreshToken = "";
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { refreshAccessToken, restoreAuthState } = authSlice.actions;
