import React, { Component } from "react";
import BlogPosts from "./BlogPosts";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newContent: "",
      user: "",
      blogs: [],
      users: [
        { name: "Select User" },
        { name: "Tony" },
        { name: "Steve" },
        { name: "Natasha" },
        { name: "Nick" },
        { name: "Stephen" },
        { name: "Bruce" }
      ]
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddBlogPost = (user, content) => {
    this.setState({
      blogs: [
        ...this.state.blogs,
        { id: Math.floor(Math.random() * 99999), user: user, content: content }
      ],
      newContent: ""
    });
  };

  handleDeleteBlogPost = blog => {
    this.setState({
      blogs: [...this.state.blogs.filter(item => item.id != blog.id)]
    });
  };

  render() {
    //console.log(this.state.blogs);
    return (
      <div>
        <select name="user" onChange={this.handleInputChange}>
          {this.state.users.map((val, key) => {
            return <option key={key} label={val.name} value={val.name} />;
          })}
        </select>
        <br />
        <br />
        <input
          type="text"
          name="newContent"
          value={this.state.newContent}
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          onClick={() => {
            this.handleAddBlogPost(this.state.user, this.state.newContent);
          }}
        >
          Add
        </button>
        <BlogPosts
          blogs={this.state.blogs}
          delete={this.handleDeleteBlogPost}
        />
      </div>
    );
  }
}
