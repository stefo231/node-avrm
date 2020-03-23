import React, { Component } from "react";
import PropTypes from "prop-types";

class Comments extends Component {
  render() {
    return (
      <div id="comments">
        <span>Datum: </span> &nbsp;
        <span>{this.props.date}</span>&nbsp;
        <span>Broj: </span> &nbsp;
        <span>{this.props.broj}</span>&nbsp;
        <span>Cifra: </span> &nbsp;
        <span>{this.props.cifra}</span>&nbsp;
        <ol>
          {this.props.comments.map((c, i) => {
            return (
              <li key={i}>
                <span>{c.user}</span> &nbsp;
                <span>{c.com}</span> &nbsp;
                <span>{this.props.date}</span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

Comments.propTypes = {
  date: PropTypes.string,
  broj: PropTypes.number,
  cifra: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired
};

export default Comments;
