import React, { Component } from "react";
import { Container, Row, Image } from "react-bootstrap";

class Poster extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      posterPath: this.props.posterPath,
      description: false
    };
  }

  shouldComponentUpdate() {
    return this.props.description;
  }

  renderMovie = () => {
    if(!this.props.description) {
      this.props.userFocus(this.state.id);
      // selecting a poster will automatically take you to the top of the page to view the description section.
      window.location.href='#'
    }
  };

  render() {
    console.log(`Poster ${this.props.id} Component Rendered`);
    const posterSource =
      "https://image.tmdb.org/t/p/w200" + this.props.posterPath;
    return (
      <Image
        id={this.state.id}
        onClick={this.renderMovie}
        src={posterSource}
      />
    );
  }

}

export default Poster;
