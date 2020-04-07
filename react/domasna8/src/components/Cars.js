import React, { Component } from "react";
import { connect } from "react-redux";
import { CarsInput } from "../actions/Cars";

class Cars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
    };
  }

  componentDidMount() {
    this.props.carsInput();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  //? so many questions, so little time
  render() {
    return (
      <div>
        <input
          type="text"
          name="brand"
          value={this.state.brand}
          onChange={this.handleChange}
        />
        This car is:
        {this.props.brand}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brand: state.CarsReducer.brand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    carsInput: () => {
      dispatch(CarsInput());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
