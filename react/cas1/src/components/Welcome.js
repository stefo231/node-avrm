import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div id="welcome">
        <h2>
          Welcome Screen {this.props.name} {this.props.lastName}
        </h2>
        <p>{this.props.age}</p>

        {this.props.flag === true ? (
          <h2>This is a conditional header</h2>
        ) : (
          <h3>Condition false</h3>
        )}
      </div>
    );
  }
}

export default Welcome;
