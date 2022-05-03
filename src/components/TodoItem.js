import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handleChangeProps, handleDeleteTodoProps } = props;
  const { title, completed, id } = todo;

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button
        type="button"
        onClick={() => handleDeleteTodoProps(id)}
      >
        Delete
      </button>
      {' '}
      {title}
    </li>
  );
}

export default TodoItem;
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  handleDeleteTodoProps: PropTypes.func.isRequired,
};
