import React from 'react';
import { Card, Divider } from 'antd';
import { observer } from "mobx-react"
import Todo from './Todo';

@observer
class TodoList extends React.Component {
  render() {
    const { todos } = this.props.store;

    return (
      <Card title="Todo List">
        {todos.map((item, index) => (
          <div key={item.id}>
            {index > 0 && (
              <Divider />
            )}
            <Todo todo={item} />
          </div>
        ))}
      </Card>
    );
  }
}

export default TodoList;
