import React, { Component } from 'react'

class AddTodos extends Component{
    state = {
        content: ''
    }
    changeHandler = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    submitHandler = (e)=>{
        e.preventDefault()
        const todo = {
            content: this.state.content,
            id: Math.random()*10
        }
       this.props.add(todo)
       this.setState({
           content: ''
       })
    }
    render(){
        return(
            <div className="card">
            <form className="form-inline" onSubmit={this.submitHandler}>
                <input type="text" className="form-control" required={true} onChange={this.changeHandler} value={this.state.content}/>
                <input type="submit" className="btn btn-primary" value="Add Todo"/>
            </form>
        </div>
        )
    }
}

export default AddTodos