import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: '1',
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: '2',
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: '3',
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  delTodo = (id) => {
    console.log('deleted', id);
  }

  addTodoItem = (title) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          id: uuidv4(),
          title,
          completed: false,
        },
      ],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={this.handleChange}
          handleDeleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
