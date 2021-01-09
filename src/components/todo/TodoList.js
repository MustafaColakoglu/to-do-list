import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from "../../redux/actions/todoActions"

class TodoList extends Component {

    componentDidMount() {
        this.props.actions.getTodos();
      }

    onClickHandler=(e)=>{
        let {id}=e.target;
        let todos=JSON.parse(sessionStorage.getItem("todos"));
        let newTodos=todos.filter(x=>x.id!==id);
        sessionStorage.setItem("todos",JSON.stringify(newTodos))
        
        e.target.parentElement.parentElement.remove();
        
    }
    render() {

        
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Headline</td>
                            <td>Content</td>
                            <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map(todo=>(
                            <tr key={todo.id}>
                            <td>{todo.headline}</td>
                            <td>{todo.content}</td>
                            <td><button id={todo.id} type="button" className="btn btn-danger" onClick={this.onClickHandler}>delete</button></td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        todos:state.todoReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            getTodos:bindActionCreators(
                todoActions.getToDos,
                dispatch
            )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
