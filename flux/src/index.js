import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'flux/utils';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import store from './flux/store';
import * as actions from './flux/actions';

import 'antd/dist/antd.css';
import './index.css';

function App(props) {
  console.log('props', props);
  return (
    <div className="app">
      <AddTodo {...props} />
      <div style={{marginTop: '30px'}}>
        <TodoList {...props} />
      </div>
    </div>
  );
}

function getStores() {
  return [
    store,
  ];
}

function getState() {
  return {
    state: store.getState(),
    onAddTodo: actions.addTodo,
    onSetTodoDone: actions.setTodoDone,
  };
}

const AppContainer = Container.createFunctional(App, getStores, getState);
ReactDOM.render(<AppContainer />, document.getElementById('root'));
