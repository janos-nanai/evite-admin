import { GuestData } from "./guest-types";

export interface InvitationsState {
  guestList: GuestData[] | [];
  adultsTotal: number;
  kidsTotal: number;
  isLoading: boolean;
}

export interface MainStore {
  invitations: InvitationsState;
}
