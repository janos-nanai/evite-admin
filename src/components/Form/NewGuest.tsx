import { GuestDataInit } from "../../types/guest-types";
import { AppState } from "../../types/store-types";

import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createGuest } from "../../store/guests-slice";
import { closeNewGuestModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormInput from "./BasicFormInput";
import { Container } from "react-bootstrap";

const NewGuest = () => {
  const [voucherIdInput, setVoucherIdInput] = useState("");
  const [voucherPassInput, setVoucherPassInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");

  const dispatch = useDispatch();

  const show = useSelector((state: AppState) => state.ui.showNewGuest);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const newGuestData: GuestDataInit = {
      voucherId: voucherIdInput,
      voucherPass: voucherPassInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      nickName: nickNameInput,
    };

    dispatch(createGuest(newGuestData));

    setVoucherIdInput("");
    setVoucherPassInput("");
    setFirstNameInput("");
    setLastNameInput("");
    setNickNameInput("");

    dispatch(closeNewGuestModal());
  };

  const closeHandler = () => {
    dispatch(closeNewGuestModal());
  };

  const voucherIdInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setVoucherIdInput(event.target.value.trim());
  };

  const voucherPassInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setVoucherPassInput(event.target.value.trim());
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
      <Container className="d-flex">
        <Container style={{ width: "50%" }}>
          <BasicFormInput
            id="voucherId"
            title="voucher-id"
            type="text"
            changeHandler={voucherIdInputHandler}
            value={voucherIdInput}
          />
        </Container>
        <Container>
          <BasicFormInput
            id="voucherPass"
            title="voucher-pass"
            type="text"
            changeHandler={voucherPassInputHandler}
            value={voucherPassInput}
          />
        </Container>
      </Container>
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
