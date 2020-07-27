import React, { Component } from "react";

class Waiting extends Component {
  render() {
      console.log(`Waiting Component Rendered`);
    return (
      <div style={{ width: "auto" }}>
        <h1>Loading ...</h1>
      </div>
    );
  }
}

export default Waiting;
