import { PartnerData } from "../../types/guest-types";
import { AppState } from "../../types/store-types";

import {
  useCallback,
  useEffect,
  useState,
  FormEvent,
  ChangeEvent,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePartner } from "../../store/single-guest-slice";
import { closeUpdatePartnerModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormCheckbox from "./BasicFormCheckbox";
import BasicFormInput from "./BasicFormInput";

const UpdatePartner = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");
  const [foodGlutenFreeInput, setFoodGlutenFreeInput] = useState(false);
  const [foodLactoseFreeInput, setFoodLactoseFreeInput] = useState(false);
  const [foodDiabeticInput, setFoodDiabeticInput] = useState(false);

  const dispatch = useDispatch();

  const currentPartnerData = useSelector(
    (state: AppState) =>
      state.singleGuest.data!.partner || {
        firstName: "",
        lastName: "",
        nickName: "",
        foodGlutenFree: false,
        foodLactoseFree: false,
        foodDiabetic: false,
      }
  );

  const _updateForm = useCallback(() => {
    setFirstNameInput(currentPartnerData.firstName);
    setLastNameInput(currentPartnerData.lastName);
    setNickNameInput(currentPartnerData.nickName);
    setFoodGlutenFreeInput(currentPartnerData.foodGlutenFree);
    setFoodLactoseFreeInput(currentPartnerData.foodLactoseFree);
    setFoodDiabeticInput(currentPartnerData.foodDiabetic);
  }, [currentPartnerData]);

  const show = useSelector((state: AppState) => state.ui.showUpdatePartner);

  useEffect(() => {
    _updateForm();
  }, [_updateForm, show]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const updatedPartnerData: PartnerData = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      nickName: nickNameInput,
      foodGlutenFree: foodGlutenFreeInput,
      foodLactoseFree: foodLactoseFreeInput,
      foodDiabetic: foodDiabeticInput,
    };

    dispatch(updatePartner(updatedPartnerData));

    dispatch(closeUpdatePartnerModal());
  };

  const closeHandler = () => {
    dispatch(closeUpdatePartnerModal());
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
      title="UPDATE GUEST"
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

export default UpdatePartner;
