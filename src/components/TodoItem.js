import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const { todo, handleChangeProps, handleDeleteTodoProps } = props;
  const { title, completed, id } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => handleDeleteTodoProps(id)}
      >
        Delete
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
}

export default TodoItem;
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  handleDeleteTodoProps: PropTypes.func.isRequired,
};
