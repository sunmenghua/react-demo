import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from "mobx-react"
import DevTools from "mobx-react-devtools";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import todoStore from "./stores/todoStore";

import 'antd/dist/antd.css';
import './index.css';

@observer
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AddTodo store={this.props.store} />
        <div style={{marginTop: '30px'}}>
          <TodoList store={this.props.store} />
        </div>
        <DevTools />
      </div>
    );
  }
}

ReactDOM.render(<App store={todoStore} />, document.getElementById('root'));
