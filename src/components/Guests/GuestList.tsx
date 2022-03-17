import { Accordion } from "react-bootstrap";

import Guest from "./Guest";

import { DUMMY_GUESTLIST } from "../../assets/dummy-guestlist";

const GuestList = () => {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Guests</Accordion.Header>
      <Accordion.Body>
        {DUMMY_GUESTLIST.map((guest) => {
          const { id, name, contact, isComing, didReply, accompaniedBy } =
            guest;
          return (
            <Guest
              key={id}
              id={id}
              name={name}
              contact={contact}
              isComing={isComing}
              didReply={didReply}
              accompaniedBy={accompaniedBy}
            />
          );
        })}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default GuestList;
