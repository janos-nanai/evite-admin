import { ReactChild } from "react";
import { Card } from "react-bootstrap";

const BasicEditCard = (props: {
  title: string;
  children: ReactChild | ReactChild[];
}) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{props.title}</Card.Title>
      </Card.Header>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
};

export default BasicEditCard;
