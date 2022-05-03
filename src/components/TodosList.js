import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  constructor(props) {
    super(props);
    const { todos } = props;
    this.state = {
      todos,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (id) => {
    console.log('clicked', id);
  };

  render() {
    const { todos } = this.state;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.handleChange}
          />
        ))}
      </ul>
    );
  }
}
TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default TodosList;
