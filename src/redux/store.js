import { createStore } from "@reduxjs/toolkit";

//STATE :: AVAILABLE FOR ALL THE COMPONENTS
const initState = {
  counter: 100,
  cityList: ["Delhi", "Calcutta", "Mumbai", "Chennai"],
};

/**
 * This is a very Special function
 * This function takes TWO PARAMETER =>
 * STATE
 * ACTION
 *
 * This is known as REDUCER (Very popular in the world of REDUX)
 *
 * This function helps us to UPDATE THE STATE; which declared as INITIAL STATE
 */

function MyAppReducer(state = initState, action) {
  //TODO UPDATE THE STATE
  return state;
}

const store = createStore(MyAppReducer);
export { store };
