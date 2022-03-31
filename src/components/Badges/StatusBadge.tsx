import React from "react";
import { Badge } from "react-bootstrap";
import { CheckLg, QuestionLg, XLg } from "react-bootstrap-icons";

const StatusBadge = (props: { isComing: boolean; didReply: boolean }) => {
  return (
    <React.Fragment>
      {props.didReply ? (
        props.isComing ? (
          <Badge bg="success">
            <CheckLg />
          </Badge>
        ) : (
          <Badge bg="danger">
            <XLg />
          </Badge>
        )
      ) : (
        <Badge bg="secondary">
          <QuestionLg />
        </Badge>
      )}
    </React.Fragment>
  );
};

export default StatusBadge;
