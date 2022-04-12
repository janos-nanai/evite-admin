import { GuestDataUpdate } from "../../types/guest-types";
import { AppState } from "../../types/store-types";

import {
  useCallback,
  useEffect,
  useState,
  FormEvent,
  ChangeEvent,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateGuest } from "../../store/single-guest-slice";
import { closeUpdateGuestModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormCheckbox from "./BasicFormCheckbox";
import BasicFormInput from "./BasicFormInput";

const UpdateGuest = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [isComingInput, setIsComingInput] = useState(false);
  const [didReplyInput, setDidReplyInput] = useState(false);
  const [foodGlutenFreeInput, setFoodGlutenFreeInput] = useState(false);
  const [foodLactoseFreeInput, setFoodLactoseFreeInput] = useState(false);
  const [foodDiabeticInput, setFoodDiabeticInput] = useState(false);

  const dispatch = useDispatch();

  const currentGuestData = useSelector(
    (state: AppState) => state.singleGuest.data!
  );

  const _updateForm = useCallback(() => {
    setFirstNameInput(currentGuestData.firstName);
    setLastNameInput(currentGuestData.lastName);
    setNickNameInput(currentGuestData.nickName);
    setEmailInput(currentGuestData.email);
    setPhoneInput(currentGuestData.phone);
    setIsComingInput(currentGuestData.isComing);
    setDidReplyInput(currentGuestData.didReply);
    setFoodGlutenFreeInput(currentGuestData.foodGlutenFree);
    setFoodLactoseFreeInput(currentGuestData.foodLactoseFree);
    setFoodDiabeticInput(currentGuestData.foodDiabetic);
  }, [currentGuestData]);

  const show = useSelector((state: AppState) => state.ui.showUpdateGuest);

  useEffect(() => {
    _updateForm();
  }, [_updateForm, show]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const updatedGuestData: GuestDataUpdate = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      nickName: nickNameInput,
      email: emailInput,
      phone: phoneInput,
      isComing: isComingInput,
      didReply: didReplyInput,
      foodGlutenFree: foodGlutenFreeInput,
      foodLactoseFree: foodLactoseFreeInput,
      foodDiabetic: foodDiabeticInput,
    };

    dispatch(updateGuest(updatedGuestData));

    dispatch(closeUpdateGuestModal());
  };

  const closeHandler = () => {
    dispatch(closeUpdateGuestModal());
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

  const emailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value.trim());
  };

  const phoneInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneInput(event.target.value.trim());
  };

  const isComingInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsComingInput(event.target.checked);
  };

  const didReplyInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDidReplyInput(event.target.checked);
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
      <BasicFormInput
        id="email"
        title="email"
        type="text"
        changeHandler={emailInputHandler}
        value={emailInput}
      />
      <BasicFormInput
        id="phone"
        title="phone"
        type="text"
        changeHandler={phoneInputHandler}
        value={phoneInput}
      />
      <BasicFormCheckbox
        title="coming"
        changeHandler={isComingInputHandler}
        checked={isComingInput}
      />
      <BasicFormCheckbox
        title="reply"
        changeHandler={didReplyInputHandler}
        checked={didReplyInput}
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

export default UpdateGuest;
