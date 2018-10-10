import { ADD_TODO, SET_TODO_DONE } from "./actionTypes";

let nextTodoId = 1;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    content,
    finished: false,
  }
});

export const setTodoDone = id => ({
  type: SET_TODO_DONE,
  payload: { id }
});
