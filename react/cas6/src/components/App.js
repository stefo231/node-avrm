import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import axios from "axios";
import UserList from "./UserList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  fetchUsers = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET"
    })
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        alert(err);
      });
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    console.log(this.state.users);
    return (
      <div id="app">
        <h2>App</h2>

        <Navigation />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/user-list"
            render={() => {
              return <UserList users={this.state.users} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
