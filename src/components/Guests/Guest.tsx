import { GuestData } from "../../types/guest-types";

import React from "react";
import { Accordion, Container, Col, Row } from "react-bootstrap";

import GuestDetails from "./GuestDetails";
import GuestBadge from "../Badges/GuestBadge";
import StatusBadge from "../Badges/StatusBadge";
import ChildrenBadge from "../Badges/ChildrenBadge";

const Guest = (props: GuestData) => {
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
  return (
    <Accordion>
      <Accordion.Item eventKey={_id + "a"}>
        <Accordion.Header>
          <Container>
            <Row>
              <Col>{`${lastName}, ${firstName}`} </Col>{" "}
            </Row>
            <Row>
              <Col>
                <StatusBadge isComing={isComing} didReply={didReply} />{" "}
                {isComing && didReply && (
                  <React.Fragment>
                    <GuestBadge partner={!!partner} />{" "}
                    {!!children.length && (
                      <ChildrenBadge count={children.length} />
                    )}
                  </React.Fragment>
                )}
              </Col>
            </Row>
          </Container>
        </Accordion.Header>
        <Accordion.Body>
          <GuestDetails
            _id={_id}
            firstName={firstName}
            lastName={lastName}
            nickName={nickName}
            email={email}
            phone={phone}
            isComing={isComing}
            didReply={didReply}
            foodGlutenFree={foodGlutenFree}
            foodLactoseFree={foodLactoseFree}
            foodDiabetic={foodDiabetic}
            partner={partner}
            children={children}
            createdDate={createdDate}
            modifiedDate={modifiedDate}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Guest;
