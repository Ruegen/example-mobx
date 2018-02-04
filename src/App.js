import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './App.css';

class App extends Component {
  // mobx will add appState to props
  constructor(props) {
    super(props)
    // pass through mobx
    this.state = this.props.appState
  }
  render() {
    const todos = this.state.todos.map(({title, id}) => <li key={id}>
    {title + ' '}
    <button onClick={() => this.state.removeTodo(id)}>X</button>
    </li>)

    return (
      <ul className="App">
        <h1>{this.state.todoCount + ' '} 
        <button 
        onClick={() => this.state.clearTodos()}>Clear all</button>
        </h1>
        {todos}
        <form onSubmit={(e) => {
          e.preventDefault()
          const title = e.target.title.value.trim()  // trim blank space

          // check if there is a todo
          if(!title) {
            return;
          }

          // clear input box
          e.target.title.value = ""

          // add to dodos
          this.state.addTodo(title)
        }}>
        <input name="title" type="text" />
        <input type="submit" value="add"/>
        </form>

      </ul>
    );
  }
}

// turn app into mobx observed app
export default observer(App);
