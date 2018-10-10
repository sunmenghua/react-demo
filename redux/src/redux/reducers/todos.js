import { ADD_TODO, SET_TODO_DONE } from "../actionTypes";

const initialState = {
  todos: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content, finished } = action.payload;
      const nextTodos = state.todos.concat([{ id, content, finished }]);
      return { todos: nextTodos };
    }
    case SET_TODO_DONE: {
      const { id } = action.payload;
      const nextTodos = state.todos.map(item => {
        if (item.id === id) {
          item.finished = true;
        }
        return item;
      });
      return { todos: nextTodos };
    }
    default:
      return state;
  }
}
