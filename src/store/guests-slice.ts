import { GuestData, GuestDataInit } from "../types/guest-types";
import { GuestsState } from "../types/store-types";

import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_BACKEND_ENTRY_POINT;

const namespace = "guests";

export const fetchAll = createAsyncThunk(`${namespace}/fetchAll`, async () => {
  const response = await axios.get(`${API_URL}/admin`);
  return response.data;
});

export const createGuest = createAsyncThunk(
  `${namespace}/createGuest`,
  async (newGuest: GuestDataInit) => {
    const response: AxiosResponse<GuestData, any> = await axios.post(
      `${API_URL}/admin`,
      newGuest
    );
    return response.data;
  }
);

export const deleteGuest = createAsyncThunk(
  `${namespace}/deleteGuest`,
  async (voucherId: string) => {
    await axios.delete(`${API_URL}/admin/${voucherId}`);
    return voucherId;
  }
);

const initialState: GuestsState = {
  guestList: [],
  adultsTotal: 0,
  kidsTotal: 0,
  isLoading: false,
};

const guestsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  fetchALL
    builder.addCase(fetchAll.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.isLoading = false;
      state.guestList = action.payload;
      state.adultsTotal = (() => {
        let adultCount = 0;
        state.guestList.forEach((guest) => {
          if (guest.didReply && guest.isComing) {
            adultCount++;
            if (guest.partner) adultCount++;
          }
        });
        return adultCount;
      })();
    });
    builder.addCase(fetchAll.rejected, (state) => {
      state.isLoading = false;
    });

    //  createGuest
    builder.addCase(createGuest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createGuest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.guestList.push(action.payload);
    });
    builder.addCase(createGuest.rejected, (state) => {
      state.isLoading = false;
    });

    // deleteGuest
    builder.addCase(deleteGuest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteGuest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.guestList = state.guestList.filter(
        (i) => i.voucherId !== action.payload
      );
    });
    builder.addCase(deleteGuest.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const guestsReducer = guestsSlice.reducer;
