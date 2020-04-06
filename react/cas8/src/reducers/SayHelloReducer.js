const initialState = {
  name: "",
  lastName: "",
};

const sayHelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAY_HELLO":
      return { ...state, name: action.payload };
    case "LAST_NAME":
      return { ...state, lastName: action.payload };
    default:
      return state;
  }
};

export default sayHelloReducer;
