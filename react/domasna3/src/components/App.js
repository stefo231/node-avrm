import React, { Component } from "react";
import Accounts from "./Accounts";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",

      list: []
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSaveAcc = (un, ln, e, p, a) => {
    this.setState({ list: [...this.state.list, { un, ln, e, p, a }] });
  };

  render() {
    const { username, lastname, email, phone, address } = this.state;
    //console.log(this.state.list);
    return (
      <div>
        <h3>Please provide some information</h3>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="lastname"
          name="lastname"
          value={lastname}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="address"
          name="address"
          value={address}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <button
          type="button"
          onClick={() => {
            this.handleSaveAcc(username, lastname, email, phone, address);
          }}
        >
          Submit
        </button>
        <br />
        <br />
        <Accounts results={this.state.list} />
      </div>
    );
  }
}
