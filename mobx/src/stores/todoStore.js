import { observable, computed } from 'mobx';
import TodoModel from "../models/TodoModel";

class TodoStore {
  @observable todos = [];

  addTodo(content) {
    const newTodo = new TodoModel(content);
    this.todos.push(newTodo);
    console.log('this.todos', this.todos.length);
  }
}

const store = new TodoStore();
export default store;
