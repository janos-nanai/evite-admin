import { AppState } from "../../types/store-types";

import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";

import { openLoginAdminModal, openNewGuestModal } from "../../store/ui-slice";
import { fetchAll } from "../../store/guests-slice";
import { logout } from "../../store/auth-slice";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken } = useSelector(
    (state: AppState) => state.auth
  );
  const isLoggedIn = !!(accessToken || refreshToken);

  const addGuestHandler = () => {
    dispatch(openNewGuestModal());
  };

  const refreshHandler = () => {
    dispatch(fetchAll());
  };

  const loginHandler = () => {
    dispatch(openLoginAdminModal());
  };

  const logoutHandler = () => {
    dispatch(logout(refreshToken));
    // localStorage.removeItem("refreshToken");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">e-invite admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLoggedIn ? (
              <Button variant="outline-primary" onClick={loginHandler}>
                LOGIN
              </Button>
            ) : (
              <React.Fragment>
                <Button variant="outline-primary" onClick={logoutHandler}>
                  LOGOUT
                </Button>
                <Button variant="outline-primary" onClick={addGuestHandler}>
                  ADD NEW GUEST
                </Button>
                <Button variant="outline-primary" onClick={refreshHandler}>
                  REFRESH
                </Button>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
