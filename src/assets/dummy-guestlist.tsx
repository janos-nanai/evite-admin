export const DUMMY_GUESTLIST = [
  {
    id: "1",
    name: { firstName: "Béla", lastName: "Hella", nickName: "Beduska" },
    contact: { email: "bedi@gmail.com", phone: "+361234567" },
    isComing: true,
    didReply: true,
    specialDietRequirements: ["húst hússal", "antivegán"],
    children: [],
  },
  {
    id: "2",
    name: { firstName: "Zizi", lastName: "Buskrafter", nickName: "Zizz" },
    contact: { email: "zizz@hotmail.com", phone: "+361234567" },
    isComing: true,
    didReply: true,
    specialDietRequirements: [],
    partner: 
    {
      name: { firstName: "Zaza", lastName: "Laza", nickName: "Zizférj" },
      specialDietRequirements: [],
    },
    children: [
      {
        name: { firstName: "gyerkőc-1", lastName: "Laza", nickName: "Zizférj" },
        age: 5,
        specialDietRequirements: [],
      },
      {
        name: { firstName: "gyerkőc-2", lastName: "Laza", nickName: "Zizférj" },
        age: 3,
        specialDietRequirements: [],
      },
    ],
  },
  {
    id: "3",
    name: { firstName: "Erik", lastName: "Viking", nickName: "Verick" },
    contact: { email: "erikaviking@citromail.hu", phone: "" },
    isComing: false,
    didReply: true,
    specialDietRequirements: [],
    children: [],
  },
  {
    id: "4",
    name: { firstName: "Henrik", lastName: "Fingi", nickName: "" },
    contact: { email: "", phone: "" },
    isComing: false,
    didReply: false,
    specialDietRequirements: [],
    children: [],
  },
];
