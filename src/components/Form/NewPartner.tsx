import { PartnerData } from "../../types/guest-types";
import { AppState } from "../../types/store-types";

import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPartner } from "../../store/single-guest-slice";
import { closeNewPartnerModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormCheckbox from "./BasicFormCheckbox";
import BasicFormInput from "./BasicFormInput";

const NewPartner = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");
  const [foodGlutenFreeInput, setFoodGlutenFreeInput] = useState(false);
  const [foodLactoseFreeInput, setFoodLactoseFreeInput] = useState(false);
  const [foodDiabeticInput, setFoodDiabeticInput] = useState(false);

  const dispatch = useDispatch();

  const show = useSelector((state: AppState) => state.ui.showNewPartner);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const newPartnerData: PartnerData = {
      firstName: firstNameInput.trim(),
      lastName: lastNameInput.trim(),
      nickName: nickNameInput.trim(),
      foodGlutenFree: foodGlutenFreeInput,
      foodLactoseFree: foodLactoseFreeInput,
      foodDiabetic: foodDiabeticInput,
    };

    dispatch(addPartner(newPartnerData));

    setFirstNameInput("");
    setLastNameInput("");
    setNickNameInput("");
    setFoodGlutenFreeInput(false);
    setFoodLactoseFreeInput(false);
    setFoodDiabeticInput(false);

    dispatch(closeNewPartnerModal());
  };

  const closeHandler = () => {
    dispatch(closeNewPartnerModal());
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

  const foodGlutenFreeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFoodGlutenFreeInput(event.target.checked);
  };

  const foodLactoseFreeInputHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setFoodLactoseFreeInput(event.target.checked);
  };

  const foodDiabeticInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFoodDiabeticInput(event.target.checked);
  };

  return (
    <BasicFormModal
      title="ADD PARTNER"
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
      <BasicFormCheckbox
        title="gluten-free"
        changeHandler={foodGlutenFreeInputHandler}
        checked={foodGlutenFreeInput}
      />
      <BasicFormCheckbox
        title="lactose-free"
        changeHandler={foodLactoseFreeInputHandler}
        checked={foodLactoseFreeInput}
      />
      <BasicFormCheckbox
        title="diabetic"
        changeHandler={foodDiabeticInputHandler}
        checked={foodDiabeticInput}
      />
    </BasicFormModal>
  );
};

export default NewPartner;
