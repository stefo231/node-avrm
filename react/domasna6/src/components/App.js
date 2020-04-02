import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import UsersScreen from "./screens/UsersScreen";
import PostsScreen from "./screens/PostsScreen";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/users"
            render={() => {
              return <UsersScreen />;
            }}
          />
          <Route
            path={`/posts`}
            render={() => {
              return <PostsScreen />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
