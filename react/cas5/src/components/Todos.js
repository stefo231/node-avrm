import React, { Component } from "react";

export default class Todos extends Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <ol>
          {this.props.todos.map((val, key) => {
            return (
              <li className={val.done ? "marked-done" : ""} key={key}>
                <span>{val.todo} </span>
                <input
                  type="checkbox"
                  checked={val.done}
                  value={val.done}
                  onChange={() => {
                    this.props.markCheck(val);
                  }}
                ></input>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
