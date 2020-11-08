import React from 'react';

import TodoForm from './TodoForm';
import Todos from './Todos'


class App extends React.Component {

  constructor() {
    super()
    this.state = {todos: []}
  }

  createTodo = (data) => {
    this.setState({
      todos: [...this.state.todos, data]
    })
    // debugger
  }

  render() {
    return (

      <div>
        <TodoForm createTodo={this.createTodo} />
        {/* {console.log(this.state.todos)} */}
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
