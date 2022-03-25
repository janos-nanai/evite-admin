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
