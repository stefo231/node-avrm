import React, { Component } from "react";

export default class Accounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      title: "Show"
    };
  }

  handleChange = () => {
    if (!this.state.isShown) {
      this.setState({ isShown: true, title: "Hide" });
    } else {
      this.setState({ isShown: false, title: "Show" });
    }
  };

  renderTable = () => {
    if (this.state.isShown) {
      return (
        <table>
          <tr>
            <th>User Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
          {this.props.results.map((val, key) => {
            {
              return (
                <tr key={key}>
                  <td>{val.un}</td>
                  <td>{val.ln}</td>
                  <td>{val.e}</td>
                  <td>{val.p}</td>
                  <td>{val.a}</td>
                </tr>
              );
            }
          })}
        </table>
      );
    } else {
      return null;
    }
  };

  render() {
    //console.log(this.state.isShown);
    return (
      <div>
        <h4>Table</h4>

        <button
          type="button"
          onClick={() => {
            this.handleChange();
          }}
        >
          {this.state.title}
        </button>
        <br />
        <br />
        {this.renderTable()}
      </div>
    );
  }
}
