import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyTable from "./components/MyTable";
import Details from "./components/Details";

class App extends Component {
  state = {
    selected: null
  };

  setSelected = value => {
    console.log("setSelected in App.jsx");
    this.setState({ selected: value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <MyTable selected={this.state.selected} setSelected={this.setSelected} />
              </Col>
              <Col>
                <Details selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
