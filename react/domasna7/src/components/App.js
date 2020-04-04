import React, { Component } from "react";
import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";
import HomeScr from "./screens/HomeScr";
import AboutScr from "./screens/AboutScr";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => {
              return <HomeScr />;
            }}
          />
          <Route
            path={`/about`}
            render={() => {
              return <AboutScr />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
