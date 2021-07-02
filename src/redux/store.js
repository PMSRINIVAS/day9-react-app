import { createStore } from "@reduxjs/toolkit";

//STATE :: AVAILABLE FOR ALL THE COMPONENTS
const initState = {
  counter: 100,
  cityList: ["Delhi", "Calcutta", "Mumbai", "Chennai"],
  todoList: ["Learning React"],
};

/**
 * This is a very Special function
 * This function takes TWO PARAMETER =>
 * STATE
 * ACTION
 *       TYPE :: REQUIRED
 *       PAYLOAD :: OPTIONAL
 *
 * This is known as REDUCER (Very popular in the world of REDUX)
 *
 * This function helps us to UPDATE THE STATE; which declared as INITIAL STATE
 */

function MyAppReducer(state = initState, action) {
  switch (action.type) {
    case "COUNTER_INCREMENT":
      let newcounter = state.counter + 100;
      return { ...state, counter: newcounter };

    case "COUNTER_DECREMENT":
      let newcounter1 = state.counter - 10;
      return { ...state, counter: newcounter1 };

    case "ADD_TODO":
      const newTodoList = [action.payload, ...state.todoList];
      return { ...state, todoList: newTodoList };

    default:
      return state;
  }
}
const store = createStore(MyAppReducer);
export { store };
