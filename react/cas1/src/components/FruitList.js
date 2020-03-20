import React, { Component } from "react";

class FruitList extends Component {
  render() {
    return (
      <div id="fruits">
        <h2>
          {this.props.fruits.map((fruit, i) => {
            return <p key={i}>{fruit}</p>;
          })}
        </h2>
      </div>
    );
  }
}

export default FruitList;
