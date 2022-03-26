import { GuestData } from "../../types/guest-types";

import { Accordion } from "react-bootstrap";

import Guest from "./Guest";

const GuestList = (props: {guests: GuestData[]}) => {

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Guests</Accordion.Header>
      <Accordion.Body>
        {props.guests.map((guest) => {
          const {
            voucherId,
            firstName,
            lastName,
            email,
            phone,
            isComing,
            didReply,
            specialDietRequirements,
            partner,
            children,
            createdDate,
            modifiedDate,
          } = guest;
          return (
            <Guest
              key={voucherId}
              voucherId={voucherId}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
              isComing={isComing}
              didReply={didReply}
              specialDietRequirements={specialDietRequirements}
              partner={partner}
              children={children}
              createdDate={createdDate}
              modifiedDate={modifiedDate}
            />
          );
        })}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default GuestList;
