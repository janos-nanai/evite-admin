import { AppState } from "../../types/store-types";

import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { TrashFill as TrashIcon } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

import BasicEditCard from "./BasicEditCard";
import { deletePartner } from "../../store/single-guest-slice";
import { openNewPartnerModal } from "../../store/ui-slice";
import { openUpdatePartnerModal } from "../../store/ui-slice";

const PartnerEditCard = () => {
  const partnerData = useSelector(
    (state: AppState) => state.singleGuest.data!.partner
  );

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(openNewPartnerModal());
  };

  const updateHandler = () => {
    dispatch(openUpdatePartnerModal());
  };

  const deleteHandler = () => {
    dispatch(deletePartner());
  };

  let cardContent = <Button onClick={addHandler}>ADD PARTNER</Button>;

  if (partnerData) {
    const {
      firstName,
      lastName,
      nickName,
      foodGlutenFree,
      foodLactoseFree,
      foodDiabetic,
    } = partnerData;

    cardContent = (
      <React.Fragment>
        <ListGroup>
          <ListGroup.Item>{`first name: ${firstName}`}</ListGroup.Item>
          <ListGroup.Item>{`last name: ${lastName}`}</ListGroup.Item>
          <ListGroup.Item>{`nickname: ${nickName}`}</ListGroup.Item>
        </ListGroup>
        <Container className="d-flex justify-content-between mt-2">
          <Button onClick={updateHandler}>UPDATE</Button>
          <Button onClick={deleteHandler}>
            <TrashIcon />
          </Button>
        </Container>
      </React.Fragment>
    );
  }

  return <BasicEditCard title="PARTNER">{cardContent}</BasicEditCard>;
};

export default PartnerEditCard;
