import { createSlice } from "@reduxjs/toolkit";

const initialState: { isLoading: boolean; error: string | null } = {
  isLoading: false,
  error: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});
