import { Button, Card, Container, Form } from "react-bootstrap";

const NewGuest = () => {
  return (
    <Container className="my-3" style={{ width: "500px" }}>
      <Card className="px-5">
        <Card.Body>
          <Card.Title>CREATE GUEST PROFILE</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>first name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>last name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nickName">
              <Form.Label>nickname (optional)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button type="submit" className="mt-2">SUBMIT</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewGuest;
