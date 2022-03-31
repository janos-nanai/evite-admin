import { GuestData } from "../../types/guest-types";

import { Accordion, Container, Col, Row } from "react-bootstrap";

import GuestDetails from "./GuestDetails";
import GuestBadge from "../Badges/GuestBadge";
import StatusBadge from "../Badges/StatusBadge";

const Guest = (props: GuestData) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Container>
            <Row>
              <Col>
                {`${props.lastName}, ${props.firstName}`}{" "}
                <StatusBadge
                  isComing={props.isComing}
                  didReply={props.didReply}
                />{" "}
                <GuestBadge partner={!!props.partner} />
              </Col>
            </Row>
            <Row>{props.nickName}</Row>
          </Container>
        </Accordion.Header>
        <Accordion.Body>
          <GuestDetails />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Guest;
