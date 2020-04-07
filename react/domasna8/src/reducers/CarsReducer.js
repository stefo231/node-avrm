const initialState = {
  brand: "",
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARS_INPUT":
      return { ...state, brand: action.payload };
    default:
      return state;
  }
};

export default carsReducer;
