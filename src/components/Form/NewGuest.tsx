import { GuestDataInit } from "../../types/guest-types";

import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { createGuest } from "../../store/invitations-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormInput from "./BasicFormInput";

const NewGuest = (props: { show: boolean; onClose: () => void }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const newGuestData: GuestDataInit = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      nickName: nickNameInput || undefined,
    };

    dispatch(createGuest(newGuestData));

    setFirstNameInput("");
    setLastNameInput("");
    setNickNameInput("");

    props.onClose();
  };

  const firstNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNameInput(event.target.value.trim());
  };

  const lastNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastNameInput(event.target.value.trim());
  };

  const nickNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNickNameInput(event.target.value.trim());
  };

  return (
    <BasicFormModal
      title="CREATE GUEST PROFILE"
      show={props.show}
      onClose={props.onClose}
      submitHandler={submitHandler}
    >
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
    </BasicFormModal>
  );
};

export default NewGuest;
