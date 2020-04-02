import React, { Component } from "react";
import api from "../../api/api";
import PostList from "./PostList";

export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  getPosts = async () => {
    await api
      .get("/posts")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        alert(err);
      });
  };
  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}
