import { Accordion, Container, Col, Row } from "react-bootstrap";
import GuestList from "../components/Guests/GuestList";
import StatList from "../components/Stats/StatList";

const Summary = () => {
  return (
    <Container className="pt-3 mt-5">
      <Row>
        <Col md={3}>
          <StatList />
        </Col>
        <Col md={9}>
          <Accordion defaultActiveKey="0">
            <GuestList />
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
