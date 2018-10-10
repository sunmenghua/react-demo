import React from 'react';
import { connect } from "react-redux";
import { Card, Divider } from 'antd';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { todos, dispatch } = this.props;

    return (
      <Card title="Todo List">
        {todos.map((item, index) => (
          <div key={item.id}>
            {index > 0 && (
              <Divider />
            )}
            <Todo todo={item} dispatch={dispatch} />
          </div>
        ))}
        {todos.length === 0 && (
          <div style={{textAlign: 'center', color: 'gray'}}>No Data</div>
        )}
      </Card>
    );
  }
}

const mapStateToProps = store => {
  return store.todos;
};

export default connect(mapStateToProps)(TodoList);
