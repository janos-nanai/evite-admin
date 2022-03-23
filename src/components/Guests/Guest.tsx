import { Accordion, Container, Col, Row } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";

import { GuestData } from "../../types/guest-types";

// type GuestData = {
//   id: string;
//   name: { firstName: string; lastName: string; nickName?: string };
//   contact: { email?: string; phone?: string };
//   isComing: boolean;
//   didReply: boolean;
//   accompaniedBy:
//     | {
//         name: { firstName: string; lastName: string; nickName?: string };
//         isChild: boolean;
//         age: number | null;
//       }[]
//     | [];
// };

const Guest = (props: GuestData) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Container>
            <Col>
              {props.name.nickName ||
                `${props.name.lastName} ${props.name.firstName}`}
            </Col>
            <Col>
              <PersonFill />
            </Col>
          </Container>
        </Accordion.Header>
        <Accordion.Body>
          <p>{props.id}</p>
          <h4>{`${props.name.lastName} ${props.name.firstName}`}</h4>
          {props.name.nickName && <p>{props.name.nickName}</p>}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Guest;
