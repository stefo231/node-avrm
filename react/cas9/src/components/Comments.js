import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCommentsRequest } from "../actions/CommentsActions";
import { Link } from "react-router-dom";

class Comments extends Component {
  componentDidMount() {
    this.props.zemiKomentari();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Comments</h2>
        {this.props.komentari.length > 0 ? (
          <table border="1">
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </thead>
            <tbody>
              {this.props.komentari.slice(0, 11).map((comment) => {
                return (
                  <tr key={comment.id}>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>
                      <Link to={`/comments/${comment.id}`}>kom</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    komentari: state.CommentsReducer.comments,
    torti: state.CakeReducer.cake,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    zemiKomentari: () => {
      dispatch(fetchCommentsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
