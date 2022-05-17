import { GuestDataInit } from "../../types/guest-types";
import { AppState } from "../../types/store-types";

import { customAlphabet } from "nanoid";
import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Clipboard as ClipBoardIcon } from "react-bootstrap-icons";

import { createGuest } from "../../store/guests-slice";
import { closeNewGuestModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormInput from "./BasicFormInput";
import { Button, Container } from "react-bootstrap";

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
      voucherId: voucherIdInput.trim(),
      voucherPass: voucherPassInput.trim(),
      firstName: firstNameInput.trim(),
      lastName: lastNameInput.trim(),
      nickName: nickNameInput.trim(),
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
    setVoucherIdInput(event.target.value);
  };

  const voucherPassInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setVoucherPassInput(event.target.value);
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

  const generateHandler = () => {
    const idGen = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 6);
    const passGen = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 12);
    setVoucherIdInput(idGen());
    setVoucherPassInput(passGen());
  };

  const clipboardCopyHandler = async () => {
    await navigator.clipboard.writeText(
      `${voucherIdInput} - ${voucherPassInput}`
    );
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
        <Container
          className="d-flex flex-column gap-1"
          style={{ width: "25%" }}
        >
          <Button onClick={generateHandler}>GEN</Button>
          <Button onClick={clipboardCopyHandler}>
            <ClipBoardIcon />
          </Button>
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
