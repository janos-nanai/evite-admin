import { GuestData } from "../../types/guest-types";

import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";

const GuestDetails = (props: GuestData) => {
  const {
    voucherId,
    firstName,
    lastName,
    nickName,
    email,
    phone,
    isComing,
    didReply,
    specialDiet,
    partner,
    children,
    createdDate,
    modifiedDate,
  } = props;
  const createdDateStr = createdDate.toString();
  const modifiedDateStr = modifiedDate.toString();
  return (
    <React.Fragment>
      <h5>{`voucherID: ${voucherId}`}</h5>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title>{`${lastName}, ${firstName}`}</Card.Title>
              <Card.Subtitle>{`${
                !!nickName ? '"' + nickName + '"' : ""
              }`}</Card.Subtitle>
              <Card.Subtitle>{specialDiet}</Card.Subtitle>
            </Col>
            {!!partner && (
              <Col>
                <Card.Title>{`${partner.lastName}, ${partner.firstName}`}</Card.Title>
                <Card.Subtitle>{`${
                  !!partner.nickName ? '"' + partner.nickName + '"' : ""
                }`}</Card.Subtitle>
                <Card.Subtitle>{partner.specialDiet}</Card.Subtitle>
              </Col>
            )}
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p className="mb-0">{`created: ${createdDateStr}`}</p>
            <p>{`last mod.: ${modifiedDateStr}`}</p>
            <p>{`contacts: ${email || ""} ${!!email && !!phone ? "/" : ""} ${
              phone || ""
            }`}</p>
            <p>{`reply: ${didReply}`}</p>
            <p>{`coming: ${isComing}`}</p>
          </Card.Text>
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
                const { firstName, lastName, nickName, age, specialDiet } =
                  child;
                return (
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        {`${lastName}, ${firstName} ${
                          !!nickName ? '"' + nickName + '"' : ""
                        }`}
                      </Col>
                      <Col>{`age: ${age}`}</Col>
                    </Row>
                    <Row>
                      <Col>{specialDiet}</Col>
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
