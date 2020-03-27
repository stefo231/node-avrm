import React, { Component } from "react";
import Input from "./Input";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      inputType: "password"
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();

    console.log(this.state);
  };

  showPassword = () => {
    if (this.state.inputType === "password") {
      this.setState({ inputType: "text" });
    } else {
      this.setState({ inputType: "password" });
    }
  };

  render() {
    return (
      <div id="login">
        <form onSubmit={this.submitForm}>
          <Input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <Input
            type={this.state.inputType}
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            func={this.showPassword}
          />
          <button className="action-button">SignIn</button>
        </form>
      </div>
    );
  }
}
