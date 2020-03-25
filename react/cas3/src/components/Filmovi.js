import React, { Component } from "react";

export default class Filmovi extends Component {
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <ol>
          {this.props.res.map((r, i) => {
            return (
              <li key={i}>
                <span>
                  <img src={r.img} alt="description" width="100" height="150" />
                </span>
                <span>{r.title}</span>
                <span>{r.year}</span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
