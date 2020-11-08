import React from 'react';


class TodoForm extends React.Component {

  constructor() {
    super()
    this.state = {title: "", content: ""}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createTodo(this.state)
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            value={this.state.title} //current state
            onChange={(event) => this.handleOnChange(event)} //updates state
          />
          <input
            name="content"
            type="text"
            value={this.state.content}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input
            type="submit"
            value="submit"

          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
