import React from 'react';


class Todos extends React.Component {

  constructor(props) {
    super()
  }

  // renderTodo = () => {
  //   this.props.todos.map(todo => todo.title)
  // }

  render() {
    this.props.todos.map(todo => {
      return <div>{todo.title}</div>
      )}
  }

}

export default Todos;