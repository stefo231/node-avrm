import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake } from "../actions/CakeActions";
class Cake extends Component {
  //   componentDidMount() {
  //     this.props.kupiTorta();
  //   }

  render() {
    return (
      <div>
        <h2>Cake</h2>
        broj na torti {this.props.torti}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    torti: state.CakeReducer.cakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kupiTorta: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
