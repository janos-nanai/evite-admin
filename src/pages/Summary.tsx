import { Accordion } from "react-bootstrap";
import GuestList from "../components/Guests/GuestList";

const Summary = () => {
  return (
    <Accordion defaultActiveKey="0">
      <GuestList />
    </Accordion>
  );
};

export default Summary;
