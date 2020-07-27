import React, { Component } from "react";
import { Component, Row, Col } from "react-bootstrap";
import axios from "axios";
//components
import Description from "./Description";
import Poster from "./Poster";
import Waiting from "./Waiting";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      apiError: false,
      movieObj: {},
      focusedPosterId: ''
    };
  }

  userFocus = (imgId) => {
    this.setState({ focusedPosterId: imgId }, () => {
      this.state.movies.map(movie => {
        if (movie["id"] === this.state.focusedPosterId) {
          this.setState({
            movieObj: movie
          });
        }
      });
    });
  }

  fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=26e77891e8dfafc14834d1c0d74e42b9"
      )
      .then(response => {
        this.setState(
          {
            movies: response.data.results
          },
          () => {
            this.setState({movieObj: this.state.movies[0]});
          }
        );
      })
      .catch(error => {
        this.setState({ apiError: true }, () => {
          this.setState({ apiErrorMsg: error.message });
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.movies.length == 0) return <Waiting />;

    const cards = this.state.movies.map(movie => {
      return (
        <Col sm={4} style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Poster
            id={movie.id}
            posterPath={movie.poster_path}
            userFocus={this.userFocus}
          />
        </Col>
      );
    });

    return (
      <>
        <Description
          movie={ this.state.movieObj }
        />
        <Row>{cards}</Row>
      </>
    );
  }
}

export default Page;
