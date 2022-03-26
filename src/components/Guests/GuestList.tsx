import { GuestData } from "../../types/guest-types";

import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

import Guest from "./Guest";

const GuestList = () => {
  const [loadedGuests, setLoadedGuests] = useState<GuestData[] | []>([]);

  useEffect(() => {
    fetch("http://localhost:8888/api/admin")
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Guests</Accordion.Header>
      <Accordion.Body>
        {loadedGuests.map((guest) => {
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
