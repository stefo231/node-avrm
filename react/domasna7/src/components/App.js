import React, { Component } from "react";
import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";
import HomeScr from "./screens/HomeScr";
import AboutScr from "./screens/AboutScr";
import ContactScr from "./screens/ContactScr";

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
          <Route
            path={`/contact`}
            render={() => {
              return <ContactScr />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
