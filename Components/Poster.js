import React, { Component } from "react";
import { Container, Row, Image } from "react-bootstrap";

class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      posterPath: this.props.posterPath
    };
  }

  renderMovie = () => {
    this.props.userFocus(this.state.id);
  };

  render() {
    const posterSource =
      "https://image.tmdb.org/t/p/w200" + this.props.posterPath;
    return (
      <Row>
        <Image
          id={this.state.id}
          onClick={this.renderMovie}
          src={posterSource}
          fluid
        />
      </Row>
    );
  }
}

export default Poster;
