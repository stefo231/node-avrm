import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Hello from "./Hello";
import Cake from "./Cake";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        App
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
            <li>
              <Link to="/cake">Cake</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/hello" component={Hello} />
          <Route path="/cake" component={Cake} />
        </Switch>
      </div>
    );
  }
}
