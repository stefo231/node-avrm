import axios from "axios";

export const fetchCommentsSuccess = (comments) => {
  return {
    type: "FETCH_COMMENTS_SUCCESS",
    payload: comments,
  };
};

export const fetchCommentsFail = (err) => {
  return {
    type: "FETCH_COMMENTS_FAIL",
    payload: err,
  };
};

// axios povik do API - ovde ne vo local state
export const fetchCommentsRequest = () => {
  return (dispatch) => {
    axios({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET",
    })
      .then((res) => {
        dispatch(fetchCommentsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCommentsFail(err));
      });
  };
};
