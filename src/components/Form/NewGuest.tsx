import { GuestDataInit } from "../../types/guest-types";
import { AppState } from "../../types/store-types";

import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createGuest } from "../../store/guests-slice";
import { closeNewGuestModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormInput from "./BasicFormInput";

const NewGuest = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");

  const dispatch = useDispatch();

  const show = useSelector((state: AppState) => state.ui.showNewGuest);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const newGuestData: GuestDataInit = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      nickName: nickNameInput,
    };

    dispatch(createGuest(newGuestData));

    setFirstNameInput("");
    setLastNameInput("");
    setNickNameInput("");

    dispatch(closeNewGuestModal());
  };

  const closeHandler = () => {
    dispatch(closeNewGuestModal());
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
      show={show}
      onClose={closeHandler}
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
