import { ChildData } from "../../types/guest-types";
import { AppState } from "../../types/store-types";

import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addChild } from "../../store/single-guest-slice";
import { closeNewChildModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormCheckbox from "./BasicFormCheckbox";
import BasicFormInput from "./BasicFormInput";

const NewChild = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");
  const [ageInput, setAgeInput] = useState(0);
  const [foodGlutenFreeInput, setFoodGlutenFreeInput] = useState(false);
  const [foodLactoseFreeInput, setFoodLactoseFreeInput] = useState(false);
  const [foodDiabeticInput, setFoodDiabeticInput] = useState(false);

  const dispatch = useDispatch();

  const show = useSelector((state: AppState) => state.ui.showNewChild);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const newChildData: ChildData = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      nickName: nickNameInput,
      age: ageInput,
      foodGlutenFree: foodGlutenFreeInput,
      foodLactoseFree: foodLactoseFreeInput,
      foodDiabetic: foodDiabeticInput,
    };

    dispatch(addChild(newChildData));

    console.log(newChildData);

    setFirstNameInput("");
    setLastNameInput("");
    setNickNameInput("");
    setAgeInput(0);
    setFoodGlutenFreeInput(false);
    setFoodLactoseFreeInput(false);
    setFoodDiabeticInput(false);

    dispatch(closeNewChildModal());
  };

  const closeHandler = () => {
    dispatch(closeNewChildModal());
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

  const ageInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeInput(+event.target.value);
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
      title="ADD CHILD"
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
      <BasicFormInput
        id="age"
        title="age"
        type="number"
        changeHandler={ageInputHandler}
        value={ageInput.toString()}
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

export default NewChild;
