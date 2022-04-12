import store from "../store";
import { GuestData } from "./guest-types";

export type AppState = ReturnType<typeof store.getState>;

export interface GuestsState {
  guestList: GuestData[];
  adultsTotal: number;
  kidsTotal: number;
  isLoading: boolean;
}

export interface SingleGuestState {
  data: GuestData | null;
  isLoading: boolean;
}

export interface UiState {
  showNewGuest: boolean;
  showNewPartner: boolean;
  showNewChild: boolean;
  showUpdateGuest: boolean;
  showUpdatePartner: boolean;
  showUpdateChild: boolean;
  currentChildId: string;
}
