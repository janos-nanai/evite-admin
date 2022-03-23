import { Accordion } from "react-bootstrap";

import Guest from "./Guest";

import { DUMMY_GUESTLIST } from "../../assets/dummy-guestlist";

const GuestList = () => {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Guests</Accordion.Header>
      <Accordion.Body>
        {DUMMY_GUESTLIST.map((guest) => {
          const {
            id,
            name,
            contact,
            isComing,
            didReply,
            specialDietRequirements,
            partner,
            children,
          } = guest;
          return (
            <Guest
              key={id}
              id={id}
              name={name}
              contact={contact}
              isComing={isComing}
              didReply={didReply}
              specialDietRequirements={specialDietRequirements}
              partner={partner}
              children={children}
            />
          );
        })}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default GuestList;
