import React, { Component } from "react";
import api from "../../api/api";
import { withRouter } from "react-router-dom";

class UsersScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  getUsers = async () => {
    await api
      .get("/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        alert(err);
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return this.state.users.length ? (
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((val, key) => {
            return (
              <tr
                key={key}
                onClick={() => {
                  alert(`Ouch! You Have pressed the user with ID: ${val.id}`);
                }}
              >
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : (
      <h2>Loading</h2>
    );
  }
}

export default withRouter(UsersScreen);
