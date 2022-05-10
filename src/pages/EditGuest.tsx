import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { fetchOneById } from "../store/single-guest-slice";
import GuestEditCard from "../components/Cards/GuestEditCard";
import PartnerEditCard from "../components/Cards/PartnerEditCard";
import ChildrenEditCard from "../components/Cards/ChildrenEditCard";

const EditGuest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  console.log(params);

  useEffect(() => {
    dispatch(fetchOneById(params.id!));
  }, [dispatch, params]);

  const backHandler = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <h1>Guest Profile</h1>
      <Button onClick={backHandler}>BACK TO SUMMARY</Button>
      <Container>
        <Row className="mb-2">
          <Col>
            <GuestEditCard />
          </Col>
          <Col>
            <PartnerEditCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <ChildrenEditCard />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditGuest;
