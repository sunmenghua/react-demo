import dispatcher from './dispatcher';
import { ADD_TODO, SET_TODO_DONE } from './actionTypes';

let nextTodoId = 1;

export const addTodo = content => {
  dispatcher.dispatch({
    type: ADD_TODO,
    todo: {
      id: nextTodoId++,
      content,
      finished: false,
    }
  });
};

export const setTodoDone = id => {
  dispatcher.dispatch({
    type: SET_TODO_DONE,
    id,
  });
};

