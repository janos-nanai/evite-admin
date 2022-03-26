import { FormEvent, ReactChild } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const BasicFormCard = (props: {
  title: string;
  submitHandler: (event: FormEvent) => void;
  children: ReactChild | ReactChild[];
}) => {
  return (
    <Container className="my-3" style={{ width: "500px" }}>
      <Card className="px-5">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Form onSubmit={props.submitHandler}>
            {props.children}
            <Button type="submit" className="mt-2">
              SUBMIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BasicFormCard;
