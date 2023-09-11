import { Alert } from "react-bootstrap";

const Details = props => <Alert variant="info">{props.selected ? props.selected : "No value selected yet"}</Alert>;

export default Details;
