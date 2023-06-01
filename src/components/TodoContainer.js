import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';
import SinglePage from '../pages/SinglePage';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        const temp = localStorage.getItem('todos');
        const loadedTodos = JSON.parse(temp);
        let tempData = data;
        if (loadedTodos) {
          tempData = data.concat(loadedTodos).length >= 10
            ? loadedTodos.splice(0, 10)
            : data.concat(loadedTodos);
        }
        this.setState({ todos: tempData });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
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

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.filter((todo) => todo.id !== id)],
    });
  };

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
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/ToDoApp_React_JS"
            element={(
              <div className="container">
                <div className="inner">
                  <Header />
                  <InputTodo addTodoProps={this.addTodoItem} />
                  <TodosList
                    todos={todos}
                    handleChangeProps={this.handleChange}
                    handleDeleteTodoProps={this.delTodo}
                    setUpdate={this.setUpdate}
                  />
                </div>
              </div>
            )}
          />
          <Route path="ToDoApp_React_JS/about" element={<About />}>
            <Route path=":slug" element={<SinglePage />} />
          </Route>
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </>
    );
  }
}

export default TodoContainer;
