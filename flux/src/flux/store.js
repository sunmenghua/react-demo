import { ReduceStore } from 'flux/utils';
import dispatcher from './dispatcher';
import { ADD_TODO, SET_TODO_DONE } from './actionTypes';

class TodoStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return {
      todos: [],
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case ADD_TODO:
        const { id, content, finished } = action.todo;
        const addedTodos = [{ id, content, finished }, ...state.todos];
        return {todos: addedTodos};
      case SET_TODO_DONE:
        const nextTodos = state.todos.map(item => {
          if (item.id === action.id) {
            item.finished = true;
          }
          return item;
        });
        return {todos: nextTodos};
      default:
        return state;
    }
  }
}

export default new TodoStore();
