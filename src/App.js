import React, { Component } from 'react';
import Todos from './Todos'
import AddTodos from './AddTodos'
import halfmoon from 'halfmoon'
class App extends Component {
  state = {
    todos:[
      {'content':'learn react', 'id':1},
      {'content':'buy milk', 'id':2},
    ]
  }
  remove = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id!==id
    })
    this.setState({
      todos
    })
  }
  add = (todo) =>{
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  toggleDark = () =>{
    halfmoon.toggleDarkMode()
  }
  render(){
    return (
      <div className="page-wrapper with-navbar">
        <nav className="navbar justify-content-center bg-primary bg-dark-light-dm">
          <h3 className="navbar-brand text-light">Todos</h3>
          <div className="custom-switch mb-5 ml-10">
            <input type="checkbox" id="dark-mode" onChange={this.toggleDark} />
            <label htmlFor="dark-mode">Dark mode</label>
          </div>
        </nav>
        <div className="content-wrapper">
          <div className="container">
            <Todos todos={this.state.todos} remove={this.remove} />
            <AddTodos add={this.add} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
