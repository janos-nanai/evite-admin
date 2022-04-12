import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";

import { openNewGuestModal } from "../../store/ui-slice";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const addGuestHandler = () => {
    dispatch(openNewGuestModal());
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">e-invite admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button>LOGIN</Button>
            <Button onClick={addGuestHandler}>ADD NEW GUEST</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
