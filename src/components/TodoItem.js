import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo } = this.props;
    const { title } = todo;
    return <li>{title}</li>;
  }
}

export default TodoItem;
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
