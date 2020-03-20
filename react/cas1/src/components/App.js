import React, { Component } from "react";
import Welcome from "./Welcome";
import User from "./User";
import FruitList from "./FruitList";

export default class App extends Component {
  render() {
    var user = {
      name: "Pero",
      address: "Bulevar JNA",
      city: "Stip",
      age: 25
    };

    var fruits = ["banana", "apple", "orange"];

    return (
      <div id="app">
        <h2>Hello</h2>
        <Welcome name={"Stefan"} lastName={"Zdravkov"} age={25} flag={false} />
        <User user={user} />
        <FruitList fruits={fruits} />
      </div>
    );
  }
}
