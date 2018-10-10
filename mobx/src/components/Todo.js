import React from 'react';
import { Tag, Icon } from 'antd';
import { observer } from "mobx-react";

@observer
class Todo extends React.Component {
  render() {
    const { todo } = this.props;

    return (
      <div className="todo-wrap">
        {todo.finished && (
          <Icon type="check" className="todo-checked" />
        )}
        <div className="todo-content">{todo.content}</div>
        {todo.finished === false && (
          <Tag color="#2db7f5" onClick={this.handleDoneClick} >完成</Tag>
        )}
      </div>
    );
  }
  handleDoneClick = () => {
    this.props.todo.done();
  }
}

export default Todo;

