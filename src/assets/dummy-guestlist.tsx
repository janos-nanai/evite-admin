// type GuestData = {
//   id: string;
//   name: { firstName: string; lastName: string; nickName?: string };
//   contact: { email?: string; phone?: string };
//   isComing?: boolean;
//   didReply: boolean;
//   accompaniedBy: {
//     name: { firstName: string; lastName: string; nickName?: string };
//     isChild: boolean;
//     age?: number;
//   }[] | [];
// };

export const DUMMY_GUESTLIST = [
  {
    id: "1",
    name: { firstName: "Béla", lastName: "Hella", nickName: "Beduska" },
    contact: { email: "bedi@gmail.com", phone: "+361234567" },
    isComing: true,
    didReply: true,
    accompaniedBy: [],
  },
  {
    id: "2",
    name: { firstName: "Zizi", lastName: "Buskrafter", nickName: "Zizz" },
    contact: { email: "zizz@hotmail.com", phone: "+361234567" },
    isComing: true,
    didReply: true,
    accompaniedBy: [
      {
        name: { firstName: "Zaza", lastName: "Laza", nickName: "Zizférj" },
        isChild: false,
        age: null,
      },
      {
        name: { firstName: "gyerkőc-1", lastName: "Laza", nickName: "Zizférj" },
        isChild: true,
        age: 5,
      },
      {
        name: { firstName: "gyerkőc-2", lastName: "Laza", nickName: "Zizférj" },
        isChild: true,
        age: 3,
      },
    ],
  },
  {
    id: "3",
    name: { firstName: "Erik", lastName: "Viking", nickName: "Verick" },
    contact: { email: "erikaviking@citrmail.hu", phone: "" },
    isComing: false,
    didReply: true,
    accompaniedBy: [],
  },
  {
    id: "4",
    name: { firstName: "Henrik", lastName: "Fingi", nickName: "" },
    contact: { email: "", phone: "" },
    isComing: false,
    didReply: false,
    accompaniedBy: [],
  },
];
