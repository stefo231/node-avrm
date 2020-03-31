import React, { Component } from "react";

export default class BlogPosts extends Component {
  delete(id) {
    this.props.delete(id);
    console.log(id);
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.blogs.map((val, key) => {
            return (
              <li key={key}>
                <span>
                  <h2>{val.user}</h2>
                </span>
                <span>
                  <p>{val.content}</p>
                </span>

                <button
                  type="button"
                  onClick={() => {
                    this.props.delete(val);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
