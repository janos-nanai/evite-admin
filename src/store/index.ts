import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth-slice";
import { guestsReducer } from "./guests-slice";
import { singleGuestReducer } from "./single-guest-slice";
import { uiReducer } from "./ui-slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    guests: guestsReducer,
    singleGuest: singleGuestReducer,
    ui: uiReducer,
  },
});
