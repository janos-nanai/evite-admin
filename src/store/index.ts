import { configureStore } from "@reduxjs/toolkit";
import { invitationReducer } from "./invitations-slice";

export default configureStore({
  reducer: {
    invitations: invitationReducer,
  },
});
