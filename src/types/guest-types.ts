export interface PartnerData {
  _id?: string;
  firstName: string;
  lastName: string;
  nickName: string | null;
  specialDiet: string[] | [];
}

export interface ChildData {
  _id?: string;
  firstName: string;
  lastName: string;
  nickName: string | null;
  age: number;
  specialDiet: string[] | [];
}

export interface GuestData {
  _id?: string;
  voucherId: string;
  firstName: string;
  lastName: string;
  nickName?: string;
  email: string | null;
  phone: string | null;
  isComing: boolean;
  didReply: boolean;
  specialDiet: string[] | [];
  partner: PartnerData | null;
  children: ChildData[] | [];
  createdDate: Date;
  modifiedDate: Date;
}

export interface GuestDataInit {
  firstName: string;
  lastName: string;
  nickName?: string;
}
