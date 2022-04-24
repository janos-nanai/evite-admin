import { UiState } from "../types/store-types";

import { createSlice } from "@reduxjs/toolkit";

const initialState: UiState = {
  showLoginAdmin: false,
  showNewGuest: false,
  showNewPartner: false,
  showNewChild: false,
  showUpdateGuest: false,
  showUpdatePartner: false,
  showUpdateChild: false,
  currentChildId: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openLoginAdminModal(state) {
      state.showLoginAdmin = true;
    },
    closeLoginAdminModal(state) {
      state.showLoginAdmin = false;
    },
    openNewGuestModal(state) {
      state.showNewGuest = true;
    },
    closeNewGuestModal(state) {
      state.showNewGuest = false;
    },
    openNewPartnerModal(state) {
      state.showNewPartner = true;
    },
    closeNewPartnerModal(state) {
      state.showNewPartner = false;
    },
    openNewChildModal(state) {
      state.showNewChild = true;
    },
    closeNewChildModal(state) {
      state.showNewChild = false;
    },
    openUpdateGuestModal(state) {
      state.showUpdateGuest = true;
    },
    closeUpdateGuestModal(state) {
      state.showUpdateGuest = false;
    },
    openUpdatePartnerModal(state) {
      state.showUpdatePartner = true;
    },
    closeUpdatePartnerModal(state) {
      state.showUpdatePartner = false;
    },
    openUpdateChildModal(state) {
      state.showUpdateChild = true;
    },
    closeUpdateChildModal(state) {
      state.showUpdateChild = false;
    },
    setCurrentChildId(state, action) {
      state.currentChildId = action.payload;
    },
  },
});

export const {
  openLoginAdminModal,
  closeLoginAdminModal,
  openNewGuestModal,
  closeNewGuestModal,
  openNewPartnerModal,
  closeNewPartnerModal,
  openNewChildModal,
  closeNewChildModal,
  openUpdateGuestModal,
  closeUpdateGuestModal,
  openUpdatePartnerModal,
  closeUpdatePartnerModal,
  openUpdateChildModal,
  closeUpdateChildModal,
  setCurrentChildId,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
