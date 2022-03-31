import { FormEvent, ReactChild } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const BasicFormCard = (props: {
  title: string;
  show: boolean;
  onClose: () => any;
  submitHandler: (event: FormEvent) => void;
  children: ReactChild | ReactChild[];
}) => {
  return (
    <Modal className="px-5" show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.submitHandler}>
          {props.children}
          <Button type="submit" className="mt-2">
            SUBMIT
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BasicFormCard;
