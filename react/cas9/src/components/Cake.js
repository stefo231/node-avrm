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
        <button
          onClick={() => {
            this.props.kupiTorta(this.props.torti);
          }}
        >
          Buy Cake
        </button>
      </div>
    );
  }
}

// From Reducers
const mapStateToProps = (state) => {
  return {
    torti: state.CakeReducer.cakes,
  };
};

// From Actions
const mapDispatchToProps = (dispatch) => {
  return {
    kupiTorta: (cake) => {
      dispatch(buyCake(cake));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
