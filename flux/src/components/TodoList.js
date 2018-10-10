import React from 'react';
import { Card, Divider } from 'antd';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { state, onSetTodoDone } = this.props;

    return (
      <Card title="Todo List">
        {state.todos.map((item, index) => (
          <div key={item.id}>
            {index > 0 && (
              <Divider />
            )}
            <Todo todo={item} onSetTodoDone={onSetTodoDone} />
          </div>
        ))}
        {state.todos.length === 0 && (
          <div style={{textAlign: 'center', color: 'gray'}}>No Data</div>
        )}
      </Card>
    );
  }
}

export default TodoList;
