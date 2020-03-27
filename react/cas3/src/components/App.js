import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(`This is a constructor`);
    this.state = {
      username: "",
      password: "",
      age: 0
    };
  }

  // handleUsernameChange = event => {
  //   this.setState({ username: event.target.value });
  // };
  // handlePasswordChange = event => {
  //   this.setState({ password: event.target.value });
  // };

  // componentDidMount() {
  //   console.log(`Component Did Mount`);
  // }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  showValues = (user, psw, age) => {
    alert(`${user}, ${psw}, ${age}`);
  };

  render() {
    console.log(this.state.username);
    return (
      <div>
        <h3>{this.state.username}</h3>
        <br />
        <input
          type="text"
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <br />
        <h3>{this.state.password}</h3>
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <br />
        <h3>{this.state.age}</h3>
        <br />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <button
          type="button"
          onClick={() => {
            this.showValues(
              this.state.username,
              this.state.password,
              this.state.age
            );
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
