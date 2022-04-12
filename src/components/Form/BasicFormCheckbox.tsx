import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

const BasicFormCheckbox = (props: {
  title: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}) => {
  return (
    <Form.Check
      type="checkbox"
      label={props.title}
      id={props.title}
      onChange={props.changeHandler}
      checked={props.checked}
    />
  );
};

export default BasicFormCheckbox;
