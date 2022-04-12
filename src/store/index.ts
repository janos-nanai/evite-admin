import { configureStore } from "@reduxjs/toolkit";
import { guestsReducer } from "./guests-slice";
import { singleGuestReducer } from "./single-guest-slice";
import { uiReducer } from "./ui-slice";

export default configureStore({
  reducer: {
    guests: guestsReducer,
    singleGuest: singleGuestReducer,
    ui: uiReducer,
  },
});
