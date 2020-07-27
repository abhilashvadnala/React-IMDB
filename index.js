import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { render } from "react-dom";
// bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
// components
import Page from "./Components/Page";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container className="MainContainer">
        <Page />
      </Container>
    );
  }
}

render(<App />, document.getElementById("root"));
