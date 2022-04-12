import { GuestData } from "../../types/guest-types";

import { Accordion, Container, Col, Row } from "react-bootstrap";

import GuestDetails from "./GuestDetails";
import GuestBadge from "../Badges/GuestBadge";
import StatusBadge from "../Badges/StatusBadge";

const Guest = (props: GuestData) => {
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
    partner,
    children,
    createdDate,
    modifiedDate,
  } = props;
  return (
    <Accordion>
      <Accordion.Item eventKey={voucherId + "a"}>
        <Accordion.Header>
          <Container>
            <Row>
              <Col>{`${lastName}, ${firstName}`} </Col>{" "}
            </Row>
            <Row>
              <Col>
                <StatusBadge isComing={isComing} didReply={didReply} />{" "}
                {isComing && didReply && <GuestBadge partner={!!partner} />}
              </Col>
            </Row>
          </Container>
        </Accordion.Header>
        <Accordion.Body>
          <GuestDetails
            voucherId={voucherId}
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
