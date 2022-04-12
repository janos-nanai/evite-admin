import { AppState } from "../../types/store-types";

import { Button, Container, ListGroup } from "react-bootstrap";
import { TrashFill as TrashIcon } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

import BasicEditCard from "./BasicEditCard";
import { deleteGuest } from "../../store/guests-slice";
import { openUpdateGuestModal } from "../../store/ui-slice";

const GuestEditCard = () => {
  const dispatch = useDispatch();

  const guestData = useSelector((state: AppState) => state.singleGuest.data);

  const {
    voucherId,
    firstName,
    lastName,
    nickName,
    email,
    phone,
    isComing,
    didReply,
    foodGlutenFree,
    foodLactoseFree,
    foodDiabetic,
  } = guestData!;

  const updateHandler = () => {
    dispatch(openUpdateGuestModal());
  };

  const deleteHandler = () => {
    dispatch(deleteGuest(voucherId));
  };

  return (
    <BasicEditCard title="GUEST">
      <ListGroup>
        <ListGroup.Item>{`first name: ${firstName}`}</ListGroup.Item>
        <ListGroup.Item>{`last name: ${lastName}`}</ListGroup.Item>
        <ListGroup.Item>{`nickname: ${nickName}`}</ListGroup.Item>
        <ListGroup.Item>{`email: ${email}`}</ListGroup.Item>
        <ListGroup.Item>{`phone: ${phone}`}</ListGroup.Item>
        <ListGroup.Item>{`coming: ${isComing}`}</ListGroup.Item>
        <ListGroup.Item>{`reply: ${didReply}`}</ListGroup.Item>
      </ListGroup>
      <Container className="d-flex justify-content-between mt-2">
        <Button onClick={updateHandler}>UPDATE</Button>
        <Button onClick={deleteHandler}>
          <TrashIcon />
        </Button>
      </Container>
    </BasicEditCard>
  );
};

export default GuestEditCard;
