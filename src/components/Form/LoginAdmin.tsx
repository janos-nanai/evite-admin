import { AppState } from "../../types/store-types";

import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../store/auth-slice";
import { closeLoginAdminModal } from "../../store/ui-slice";
import BasicFormModal from "./BasicFormModal";
import BasicFormInput from "./BasicFormInput";
import { Container } from "react-bootstrap";

const LoginAdmin = () => {
  const [adminIdInput, setAdminIdInput] = useState("");
  const [adminPassInput, setAdminPassInput] = useState("");

  const dispatch = useDispatch();

  const show = useSelector((state: AppState) => state.ui.showLoginAdmin);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const loginData = {
      adminId: adminIdInput,
      adminPass: adminPassInput,
    };

    dispatch(login(loginData));

    setAdminIdInput("");
    setAdminPassInput("");

    dispatch(closeLoginAdminModal());
  };

  const closeHandler = () => {
    dispatch(closeLoginAdminModal());
  };

  const adminIdInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAdminIdInput(event.target.value.trim());
  };

  const adminPassInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAdminPassInput(event.target.value.trim());
  };

  return (
    <BasicFormModal
      title="LOGIN"
      show={show}
      onClose={closeHandler}
      submitHandler={submitHandler}
    >
      <Container className="d-flex">
        <Container style={{ width: "50%" }}>
          <BasicFormInput
            id="adminId"
            title="admin-id"
            type="text"
            changeHandler={adminIdInputHandler}
            value={adminIdInput}
          />
        </Container>
        <Container>
          <BasicFormInput
            id="adminPass"
            title="admin-pass"
            type="password"
            changeHandler={adminPassInputHandler}
            value={adminPassInput}
          />
        </Container>
      </Container>
    </BasicFormModal>
  );
};

export default LoginAdmin;
