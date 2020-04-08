import { combineReducers } from "redux";
import SayHelloReducer from "./SayHelloReducer";
import CakeReducer from "./CakeReducer";

export default combineReducers({
  SayHelloReducer,
  CakeReducer,
});
