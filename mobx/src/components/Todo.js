import React from 'react';
import { Tag, Icon } from 'antd';
import { observer } from "mobx-react";

@observer
class Todo extends React.Component {
  render() {
    const { todo } = this.props;

    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          {todo.finished && (
            <Icon type="check" style={{color: '#87d068', marginRight: '10px'}} />
          )}
          <span>{todo.content}</span>
        </div>
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

