import { ChildData } from "../../types/guest-types";

import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { TrashFill as TrashIcon } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

import { deleteChild } from "../../store/single-guest-slice";
import { openUpdateChildModal, setCurrentChildId } from "../../store/ui-slice";
import GlutenFreeBadge from "../Badges/GlutenFreeBadge";
import LactoseFreeBadge from "../Badges/LactoseFreeBadge";
import DiabeticBadge from "../Badges/DiabeticBadge";

const ChildListItem = (props: ChildData) => {
  const dispatch = useDispatch();

  const {
    id,
    firstName,
    lastName,
    nickName,
    age,
    foodGlutenFree,
    foodLactoseFree,
    foodDiabetic,
  } = props;

  const updateHandler = () => {
    dispatch(setCurrentChildId(id));
    console.log(id);

    dispatch(openUpdateChildModal());
  };

  const deleteHandler = () => {
    dispatch(deleteChild(id!));
  };

  return (
    <Card className="d-inline-block">
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>{`first name: ${firstName}`}</ListGroup.Item>
          <ListGroup.Item>{`last name: ${lastName}`}</ListGroup.Item>
          <ListGroup.Item>{`nickname: ${nickName}`}</ListGroup.Item>
          <ListGroup.Item>{`age: ${age}`}</ListGroup.Item>
          <ListGroup.Item>
            {"special diet:"}
            {foodGlutenFree && <GlutenFreeBadge />}
            {foodLactoseFree && <LactoseFreeBadge />}
            {foodDiabetic && <DiabeticBadge />}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Container className="d-flex justify-content-between">
          <Button onClick={updateHandler}>UPDATE</Button>
          <Button onClick={deleteHandler}>
            <TrashIcon />
          </Button>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default ChildListItem;
