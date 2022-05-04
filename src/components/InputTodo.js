import React, { PureComponent } from 'react';

class InputTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    console.log(title);
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." value={title} name="title" onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
