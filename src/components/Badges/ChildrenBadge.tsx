import { Badge } from "react-bootstrap";

const ChildrenBadge = (props: { count: number }) => {
  return (
    <Badge>
      <span>{`child x${props.count}`}</span>
    </Badge>
  );
};

export default ChildrenBadge;
