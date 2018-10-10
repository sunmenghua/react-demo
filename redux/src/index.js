import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import 'antd/dist/antd.css';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AddTodo />
        <div style={{marginTop: '30px'}}>
          <TodoList />
        </div>
      </div>
    );
  }
}

function ProviderContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<ProviderContainer />, document.getElementById('root'));
