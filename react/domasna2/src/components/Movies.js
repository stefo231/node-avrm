import React, { Component } from "react";

import PropTypes from "prop-types";

class Movies extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.filmovi.map((film, i) => {
            return (
              <li key={i}>
                <span>
                  <img
                    src={`${film.img}`}
                    alt="description"
                    width="100"
                    height="150"
                  />
                </span>
                <br />
                <span>Title: {film.title}</span>
                <br />
                <span>Rating: {JSON.stringify(film.rating)}/10</span>
                <br />
                <span>Year: {JSON.stringify(film.year)}</span>
                <br />
                <span>Director: {film.director}</span>
                <br />
                <br />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
Movies.propTypes = {
  filmovi: PropTypes.array.isRequired
};

export default Movies;
