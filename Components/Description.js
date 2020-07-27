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
    return (
      <Row className="Description" id="desc">
        <Col lg={4} md={4} sm={4} xs={4}>
          {/**This Column has holds the movie poster */}
          <Poster
            id={this.props.movie["id"]}
            posterPath={this.props.movie["poster_path"]}
            description={true}
          />
        </Col>
        <Col lg={8} md={8} sm={8} xs={8}>
          {/**This Column has holds the description of the movie */}
          <Row style={{ height: "15%" }}>
            <h3>{this.props.movie["title"]}</h3>
          </Row>
          <Row style={{ height: "30%" }}>
            <Col>
              <Row>Release Date: {this.props.movie["release_date"]}</Row>
              <br />
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
          <Row style={{ height: "55%", fontSize: 20 }}>
            <p>{this.props.movie["overview"]}</p>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Description;
