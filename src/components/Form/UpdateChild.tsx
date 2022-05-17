import { ChildData } from "../../types/guest-types";
import { AppState } from "../../types/store-types";

import {
  useCallback,
  useEffect,
  useState,
  FormEvent,
  ChangeEvent,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateChild } from "../../store/single-guest-slice";
import { closeUpdateChildModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormCheckbox from "./BasicFormCheckbox";
import BasicFormInput from "./BasicFormInput";

const UpdateChild = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");
  const [ageInput, setAgeInput] = useState(0);
  const [foodGlutenFreeInput, setFoodGlutenFreeInput] = useState(false);
  const [foodLactoseFreeInput, setFoodLactoseFreeInput] = useState(false);
  const [foodDiabeticInput, setFoodDiabeticInput] = useState(false);

  const dispatch = useDispatch();

  const currentChildId = useSelector(
    (state: AppState) => state.ui.currentChildId
  );

  const currentChildData = useSelector(
    (state: AppState) =>
      state.singleGuest.data!.children.find(
        (i) => i._id === currentChildId
      ) || {
        firstName: "",
        lastName: "",
        nickName: "",
        age: 0,
        foodGlutenFree: false,
        foodLactoseFree: false,
        foodDiabetic: false,
      }
  );

  const _updateForm = useCallback(() => {
    setFirstNameInput(currentChildData.firstName);
    setLastNameInput(currentChildData.lastName);
    setNickNameInput(currentChildData.nickName);
    setAgeInput(currentChildData.age);
    setFoodGlutenFreeInput(currentChildData.foodGlutenFree);
    setFoodLactoseFreeInput(currentChildData.foodLactoseFree);
    setFoodDiabeticInput(currentChildData.foodDiabetic);
  }, [currentChildData]);

  const show = useSelector((state: AppState) => state.ui.showUpdateChild);

  useEffect(() => {
    _updateForm();
  }, [_updateForm, show]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const updatedChildData: ChildData = {
      firstName: firstNameInput.trim(),
      lastName: lastNameInput.trim(),
      nickName: nickNameInput.trim(),
      age: ageInput,
      foodGlutenFree: foodGlutenFreeInput,
      foodLactoseFree: foodLactoseFreeInput,
      foodDiabetic: foodDiabeticInput,
    };

    dispatch(
      updateChild({
        childId: currentChildId,
        childChangeData: updatedChildData,
      })
    );

    dispatch(closeUpdateChildModal());
  };

  const closeHandler = () => {
    dispatch(closeUpdateChildModal());
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
      title="UPDATE CHILD"
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

export default UpdateChild;
