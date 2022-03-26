import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

const BasicFormInput = (props: {
  id: string;
  title: string;
  type: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <Form.Group className="mb-3" controlId={props.id}>
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        type={props.type}
        onChange={props.changeHandler}
        value={props.value}
      />
    </Form.Group>
  );
};

export default BasicFormInput;
