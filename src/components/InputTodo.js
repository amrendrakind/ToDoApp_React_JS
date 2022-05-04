import React, { PureComponent } from 'react';

class InputTodo extends PureComponent {
  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button type="button">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
