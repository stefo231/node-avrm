import React, { Component } from "react";

export default class AboutScr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      isChecked: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAlert = (firstName, lastName, email, phone, address) => {
    alert(`The form you like to submit is
    First Name: ${firstName}, 
    Last Name: ${lastName}, 
    Email: ${email}, 
    Phone: ${phone}, 
    Address: ${address}`);
  };

  handleToggle = () => {
    if (!this.state.isChecked) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      isChecked,
    } = this.state;

    return (
      <div>
        <h2>Contact</h2>
        <p>
          Would you like to disable the form?
          <input
            type="checkbox"
            name="isChecked"
            value={isChecked}
            onChange={this.handleToggle}
          />
        </p>

        <br />
        <input
          type="text"
          placeholder="firstName"
          name="firstName"
          value={firstName}
          disabled={isChecked}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="lastName"
          name="lastName"
          value={lastName}
          disabled={isChecked}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          disabled={isChecked}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          disabled={isChecked}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="address"
          name="address"
          value={address}
          disabled={isChecked}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button
          type="button"
          disabled={isChecked}
          onClick={() =>
            this.handleAlert(firstName, lastName, email, phone, address)
          }
        >
          Submit
        </button>
      </div>
    );
  }
}
