import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// components
import Poster from "./Poster";

class Description extends Component {
  noFunc = () => {
    alert(`No functionality yet.`);
  };

  render() {
    console.log(`Description Component Rendered`);
    // since some movies don't have title field, I am using original_name.
    const movieTitle = (this.props.movie["title"] === undefined) ? this.props.movie["name"] : this.props.movie["title"]
    return (
      <Row className="Description" id="desc">
        <Col lg={4} md={4} >
          {/**This Column has holds the movie poster */}
          <Poster
            id={this.props.movie["id"]}
            posterPath={this.props.movie["poster_path"]}
            description={true}
          />
        </Col>
        <Col lg={8} md={8}>
          {/**This Column has holds the description of the movie */}
          <Row style={{ height: "auto", margin: '10px'}}>
            <h3>{movieTitle}</h3>
          </Row>
          <Row style={{ height: "auto", margin: '10px' }}>
            <Col>
              <Row>Release Date: {this.props.movie["release_date"]}</Row>
              <Row>
                <button type="button" name="buy" onClick={this.noFunc}>
                  Buy
                </button>
                <button type="button" name="rent" onClick={this.noFunc}>
                  Rent
                </button>
              </Row>
            </Col>
          </Row>
          <Row style={{ height: "auto", fontSize: 20, margin: '10px' }}>
            <p>{this.props.movie["overview"]}</p>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Description;
