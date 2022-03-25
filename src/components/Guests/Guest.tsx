import { Accordion, Container, Col, Row } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";

import { GuestData } from "../../types/guest-types";

const Guest = (props: GuestData) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Container>
            <Col>
              {props.nickName || `${props.lastName} ${props.firstName}`}
            </Col>
            <Col>
              <PersonFill />
            </Col>
          </Container>
        </Accordion.Header>
        <Accordion.Body>
          <p>{props.voucherId}</p>
          <h4>{`${props.lastName} ${props.firstName}`}</h4>
          {props.nickName && <p>{props.nickName}</p>}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Guest;
