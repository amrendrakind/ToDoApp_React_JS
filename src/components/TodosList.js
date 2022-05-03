import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    return (
      <ul>
        <TodoItem key={todo.id} todo={todo} />
      </ul>
    );
  }
}

export default TodosList;
