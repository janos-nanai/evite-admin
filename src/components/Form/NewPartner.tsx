import { useState, ChangeEvent, FormEvent } from "react";
import BasicFormCard from "./BasicFormCard";
import BasicFormInput from "./BasicFormInput";

const NewPartner = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  const firstNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNameInput(event.target.value);
  };

  const lastNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastNameInput(event.target.value);
  };

  const nickNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNickNameInput(event.target.value);
  };

  return (
    <BasicFormCard title="ADD PARTNER" submitHandler={submitHandler}>
      <BasicFormInput
        id="firstName"
        title="first name"
        type="text"
        changeHandler={firstNameInputHandler}
        value={firstNameInput}
      />
      <BasicFormInput
        id="lastName"
        title="last name"
        type="text"
        changeHandler={lastNameInputHandler}
        value={lastNameInput}
      />
      <BasicFormInput
        id="nickName"
        title="nickname"
        type="text"
        changeHandler={nickNameInputHandler}
        value={nickNameInput}
      />
    </BasicFormCard>
  );
};

export default NewPartner;
