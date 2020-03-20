import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div id="user">
        <h2>User {this.props.user.name}</h2>
      </div>
    );
  }
}

export default User;
