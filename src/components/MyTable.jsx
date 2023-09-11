import { ListGroup } from "react-bootstrap";

const MyTable = props => {
  const checkSelected = value => (value === props.selected ? "selected" : "");

  return (
    <>
      <ListGroup>
        <ListGroup.Item onClick={() => props.setSelected("First")} className={checkSelected("First")}>
          First
        </ListGroup.Item>
        <ListGroup.Item onClick={() => props.setSelected("Second")} className={checkSelected("Second")}>
          Second
        </ListGroup.Item>
        <ListGroup.Item onClick={() => props.setSelected("Third")} className={checkSelected("Third")}>
          Third
        </ListGroup.Item>
      </ListGroup>
      <p>La selezione corrente è: {props.selected ? props.selected : "vuota"}</p>
    </>
  );
};

export default MyTable;
