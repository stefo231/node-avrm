import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Gallery from "./Gallery";
import api from "../api/api";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      selectedPhoto: ""
    };
  }

  getPhotos = async () => {
    await api
      .get("/photos")
      .then(res => {
        this.setState({ photos: res.data });
      })
      .catch(err => alert(err));
  };

  componentDidMount() {
    this.getPhotos();
  }

  openPhoto = photoUrl => {
    this.setState({ selectedPhoto: photoUrl });
  };

  closePhoto = () => {
    this.setState({ selectedPhoto: "" });
  };

  render() {
    console.log(this.state);
    return (
      <div id="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/gallery`}>Gallery</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            path="/gallery"
            render={() => {
              return (
                <Gallery
                  closePicture={this.closePhoto}
                  popupPhoto={this.state.selectedPhoto}
                  openPhoto={this.openPhoto}
                  photoList={this.state.photos}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
