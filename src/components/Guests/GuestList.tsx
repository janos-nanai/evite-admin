import { AppState } from "../../types/store-types";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";

import Guest from "./Guest";
import { fetchAll } from "../../store/guests-slice";

const GuestList = () => {
  const dispatch = useDispatch();
  const guests = useSelector((state: AppState) => state.guests.guestList);
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchAll());
  }, [dispatch, isLoggedIn]);

  return (
    <Card className="m-1">
      <Card.Title>Guests</Card.Title>
      <Card.Body>
        {guests.map((guest) => {
          const {
            _id,
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
          } = guest;
          return (
            <Guest
              key={_id}
              _id={_id}
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
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default GuestList;
