import React, { Component } from "react";
import api from "../../api/api";

export default class HomeScr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  getPosts = async () => {
    await api
      .get("/posts")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

  deletePosts = async (post) => {
    await api
      .delete(`/posts/${post.id}`)
      .then(
        this.setState({
          posts: [...this.state.posts.filter((item) => item.id !== post.id)],
        })
      )
      .catch((err) => {
        alert(err);
      });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return this.state.posts.length ? (
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.title}</td>
                <td>{val.body}</td>
                <td>
                  <button type="button" onClick={() => this.deletePosts(val)}>
                    &times;
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : null;
  }
}
