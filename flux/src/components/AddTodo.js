import React from 'react';
import { Card, Input, Button, Row } from 'antd';

const { TextArea } = Input;

class AddTodo extends React.Component {
  state = {
    content: '',
  };

  render() {
    return (
      <Card title="Add Todo">
        <Row>
          <TextArea
            rows={2}
            value={this.state.content}
            onChange={this.handleChange}
          />
        </Row>
        <Row style={{textAlign: 'right', marginTop: '20px'}}>
          <Button type="primary" onClick={this.handleSubmitClick}>提交</Button>
        </Row>
      </Card>
    );
  }
  handleChange = (e) => {
    this.setState({ content: e.target.value });
  }
  handleSubmitClick = () => {
    const { content } = this.state;
    if (content.trim().length === 0) {
      return;
    }

    this.props.onAddTodo(content);
    this.setState({ content: '' });
  }
}

export default AddTodo;
