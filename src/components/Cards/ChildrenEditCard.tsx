import { AppState } from "../../types/store-types";

import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { openNewChildModal } from "../../store/ui-slice";
import BasicEditCard from "./BasicEditCard";
import ChildListItem from "./ChildListItem";

const ChildrenEditCard = () => {
  const childrenData = useSelector(
    (state: AppState) => state.singleGuest.data!.children
  );

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(openNewChildModal());
  };

  return (
    <BasicEditCard title="CHILDREN">
      <Container
        className="d-grid"
        style={{ gridTemplateColumns: "1fr 1fr", gap: "10px" }}
      >
        {childrenData.map((childData) => {
          const {
            _id,
            firstName,
            lastName,
            nickName,
            age,
            foodGlutenFree,
            foodLactoseFree,
            foodDiabetic,
          } = childData;
          return (
            <ChildListItem
              key={_id}
              id={_id}
              firstName={firstName}
              lastName={lastName}
              nickName={nickName}
              age={age}
              foodGlutenFree={foodGlutenFree}
              foodLactoseFree={foodLactoseFree}
              foodDiabetic={foodDiabetic}
            />
          );
        })}
        <Container>
          <Button onClick={addHandler}>ADD CHILD</Button>
        </Container>
      </Container>
    </BasicEditCard>
  );
};

export default ChildrenEditCard;
