const initialState = {
  comments: [],
  err: "",
};

const CommentsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "FETCH_COMMENTS_SUCCESS":
      return { ...state, comments: actions.payload };
    case "FETCH_COMMENTS_FAIL":
      return { ...state, err: actions.payload };
    default:
      return state;
  }
};

export default CommentsReducer;
