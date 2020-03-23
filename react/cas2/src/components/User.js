import React, { Component } from "react";
import PropTypes from "prop-types";

export default class User extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name} {this.props.lastName}
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};
