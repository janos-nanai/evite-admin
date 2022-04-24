import { AuthState } from "../types/store-types";

import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  adminId: "",
  isLoggedIn: false,
  accessToken: "",
  isLoading: false,
};

const API_URL = process.env.REACT_APP_BACKEND_ENTRY_POINT;

const namespace = "auth";

export const login = createAsyncThunk(
  `${namespace}/login`,
  async (args: { adminId: string; adminPass: string }) => {
    const response = await axios.post(`${API_URL}/login/admin`, args);
    return response.data;
  }
);

const authSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    logout(state) {
      state.adminId = "";
      state.accessToken = "";
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    restoreAuthState(state, action) {
      console.log("action.payload", action.payload);

      const { adminId, accessToken, isLoggedIn } = action.payload;

      state.adminId = adminId;
      state.accessToken = accessToken;
      state.isLoggedIn = isLoggedIn;
      state.isLoading = false;

      console.log(
        "state:",
        state.adminId,
        state.accessToken,
        state.accessToken,
        state.isLoading
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      const { adminId, accessToken } = action.payload;
      state.adminId = adminId;
      state.accessToken = accessToken;
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { logout, restoreAuthState } = authSlice.actions;
