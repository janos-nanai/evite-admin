import { MainStore } from "../../types/store-types";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";

import Guest from "./Guest";
import { fetchAll } from "../../store/invitations-slice";

const GuestList = () => {
  const dispatch = useDispatch();
  const guests = useSelector((state: MainStore) => state.invitations.guestList);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Card className="m-1">
      <Card.Title>Guests</Card.Title>
      <Card.Body>
        {guests.map((guest) => {
          const {
            voucherId,
            firstName,
            lastName,
            nickName,
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
              nickName={nickName}
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
      </Card.Body>
    </Card>
  );
};

export default GuestList;
