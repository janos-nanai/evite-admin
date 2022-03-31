import { Badge } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";

const GuestBadge = (props: { partner: boolean }) => {
  return (
    <Badge>
      <PersonFill />
      {props.partner && <PersonFill />}
    </Badge>
  );
};

export default GuestBadge;
