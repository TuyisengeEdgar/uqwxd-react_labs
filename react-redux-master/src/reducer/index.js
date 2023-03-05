import { combineReducers } from "redux";

const counter = (state = 0, action) => {
  if (action.type === "Increment") {
    return state + action.inc;
  }
  if (action.type === "Decrease") {
    return state + action.decr;
  }
  return state;
};

const myReducers = combineReducers({ counter });
export default myReducers;
