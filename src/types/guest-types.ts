export interface PartnerData {
  _id?: string;
  firstName: string;
  lastName: string;
  nickName: string | null;
  specialDietRequirements: string[] | [];
}

export interface ChildData {
  _id?: string;
  firstName: string;
  lastName: string;
  nickName: string | null;
  age: number;
  specialDietRequirements: string[] | [];
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
  specialDietRequirements: string[] | [];
  partner: PartnerData | null;
  children: ChildData[] | [];
  createdDate: Date;
  modifiedDate: Date;
}
