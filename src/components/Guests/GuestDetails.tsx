import { GuestData } from "../../types/guest-types";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Card,
  Container,
  ListGroup,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { TrashFill as TrashIcon } from "react-bootstrap-icons";

import { deleteGuest } from "../../store/guests-slice";

const GuestDetails = (props: GuestData) => {
  const {
    _id,
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
    partner,
    children,
    createdDate,
    modifiedDate,
  } = props;

  const createdDateStr = createdDate.toString();
  const modifiedDateStr = modifiedDate.toString();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/${_id}`);
  };

  const handleDelete = () => {
    dispatch(deleteGuest(_id!));
  };

  return (
    <React.Fragment>
      <Container>
        <h5>{`ID: ${_id}`}</h5>
        <ButtonGroup>
          <Button onClick={handleEdit}>EDIT</Button>
          <Button onClick={handleDelete}>
            <TrashIcon />
          </Button>
        </ButtonGroup>
      </Container>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title>{`${lastName}, ${firstName}`}</Card.Title>
              <Card.Subtitle>{`${
                !!nickName ? '"' + nickName + '"' : ""
              }`}</Card.Subtitle>
            </Col>
            {!!partner && (
              <Col>
                <Card.Title>{`${partner.lastName}, ${partner.firstName}`}</Card.Title>
                <Card.Subtitle>{`${
                  !!partner.nickName ? '"' + partner.nickName + '"' : ""
                }`}</Card.Subtitle>
              </Col>
            )}
          </Row>
        </Card.Header>
        <Card.Body>
          <p className="mb-0">{`created: ${createdDateStr}`}</p>
          <p>{`last mod.: ${modifiedDateStr}`}</p>
          <p>{`contacts: ${email || ""} ${!!email && !!phone ? "/" : ""} ${
            phone || ""
          }`}</p>
          <p>{`reply: ${didReply}`}</p>
          <p>{`coming: ${isComing}`}</p>
        </Card.Body>
      </Card>
      {!!children.length && (
        <Card>
          <Card.Header>
            <Card.Title>{`kids ${
              children.length > 1 ? "x" + children.length : ""
            }`}</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {children.map((child) => {
                const {
                  firstName,
                  lastName,
                  nickName,
                  age,
                  foodGlutenFree,
                  foodLactoseFree,
                  foodDiabetic,
                } = child;
                return (
                  <ListGroup.Item key={child._id}>
                    <Row>
                      <Col>
                        {`${lastName}, ${firstName} ${
                          !!nickName ? '"' + nickName + '"' : ""
                        }`}
                      </Col>
                      <Col>{`age: ${age}`}</Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </React.Fragment>
  );
};

export default GuestDetails;
