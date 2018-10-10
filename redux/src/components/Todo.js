import React from 'react';
import { Tag, Icon } from 'antd';
import { setTodoDone } from '../redux/actions';

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
    const { id } = this.props.todo;
    this.props.dispatch(setTodoDone(id));
  }
}

export default Todo;
