import { useState, MouseEvent, ChangeEvent } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const NewGuest = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");

  const submitHandler = (event: MouseEvent) => {
    event.preventDefault();

    const url = "http://localhost:8888/api/admin";
    const data = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      nickName: nickNameInput || null,
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
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

  return (
    <Container className="my-3" style={{ width: "500px" }}>
      <Card className="px-5">
        <Card.Body>
          <Card.Title>CREATE GUEST PROFILE</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>first name</Form.Label>
              <Form.Control
                type="text"
                onChange={firstNameInputHandler}
                value={firstNameInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>last name</Form.Label>
              <Form.Control
                type="text"
                onChange={lastNameInputHandler}
                value={lastNameInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nickName">
              <Form.Label>nickname (optional)</Form.Label>
              <Form.Control
                type="text"
                onChange={nickNameInputHandler}
                value={nickNameInput}
              />
            </Form.Group>
            <Button type="submit" className="mt-2" onClick={submitHandler}>
              SUBMIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewGuest;
