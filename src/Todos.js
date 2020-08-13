import React from 'react';

const todos = (props) =>{
    const { todos, remove } = props
    const todoList = todos.length===0 ? (
        <div className="card d-flex justify-content-center">
            <p>yay! no todos left</p>
        </div>
    ):
    todos.map(todo => {
        return(
            
            <div className="card d-flex justify-content-between" key={todo.id}>
            <span>{todo.content}</span>
            <button className="btn" onClick={()=> remove(todo.id)}><i className="material-icons">delete</i></button>
            </div>     
            
        )
    });
    return(
        <div className="todos">
            {todoList}
        </div>   
    )
}

export default todos