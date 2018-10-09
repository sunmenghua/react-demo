import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from "mobx-react-devtools";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
