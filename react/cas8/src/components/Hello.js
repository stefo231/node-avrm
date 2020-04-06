import React, { Component } from "react";
import { connect } from "react-redux";
import { SayHello, LastName } from "../actions/SayHello";

class Hello extends Component {
  componentDidMount() {
    this.props.sayHello();
    this.props.sayLastName();
  }
  render() {
    return (
      <div>
        Hi {this.props.name} {this.props.lastName}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.SayHelloReducer.name,
    lastName: state.SayHelloReducer.lastName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sayHello: () => {
      dispatch(SayHello());
    },
    sayLastName: () => {
      dispatch(LastName());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
