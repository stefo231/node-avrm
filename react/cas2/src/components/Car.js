import React, { Component } from "react";

class Car extends Component {
  render() {
    return (
      <div id="car">
        <h2>Car</h2>
        <ul>
          {this.props.cars.map((car, i) => {
            return (
              <li key={i}>
                <span>Brand: {car.brand}</span> &nbsp;
                <span>Model: {car.model}</span> &nbsp;
                <span>Year: {car.year}</span>
              </li>
            );
          })}
        </ul>

        <ol>
          {this.props.reg.map((r, i) => {
            return (
              <li key={i}>
                <span>{r.grad}</span> &nbsp;
                <span>{r.oznaka}</span> &nbsp;
                <span>{r.tablici.tablica}</span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Car;
