import { GuestData, GuestDataInit } from "../types/guest-types";

import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { HTTP_STATUS } from "../constants/http-status";
const API_URL = process.env.REACT_APP_BACKEND_ENTRY_POINT;

const namespace = "invitations";

export const fetchAll = createAsyncThunk(`${namespace}/fetchAll`, async () => {
  const response = await axios.get(`${API_URL}/admin`);
  return response.data;
});

export const createGuest = createAsyncThunk(
  `${namespace}/createGuest`,
  async (data: GuestDataInit) => {
    const response = await axios.post(`${API_URL}/admin`, data);
    return response.statusText;
  }
);

const initialState: {
  guestList: GuestData[] | [];
  adultsTotal: number;
  kidsTotal: number;
  isLoading: boolean;
} = { guestList: [], adultsTotal: 0, kidsTotal: 0, isLoading: false };

const invitationsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    // replaceList(state, action) {
    //   if (action.payload.guestList) {
    //     state.guestList = action.payload.guestList;
    //   }
    // },
    // createGuest() {},
    // updateGuest() {},
    // deleteGuest() {},
    // addPartner() {},
    // updatePartner() {},
    // deletePartner() {},
    // addChild() {},
    // updateChild() {},
    // deleteChild() {},
  },
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
    builder.addCase(createGuest.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createGuest.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const invitationReducer = invitationsSlice.reducer;
