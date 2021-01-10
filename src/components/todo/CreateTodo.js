import React, { Component } from "react";
import "./createToDo.css"
import alertify from "alertifyjs"

export default class CreateTodo extends Component {

  constructor(props){
    super(props)

    this.state={
      headline:"",
      content:""
    }
  }
   onClickHandler=(e)=>{
        e.preventDefault();

        const id=this.generateId();
        let todo={id:id,headline:this.state.headline,content:this.state.content};

      console.log(todo);

        this.saveToStorage(todo);
        this.clearValues()
       alertify.success("todo saved successfully")
   } 

   clearValues=()=>{

    this.setState({
      headline:"",
      content:""
    })
   }

   onChangeHandler=(e)=>{
    
    const {name,value}=e.target;
    
    this.setState({
      [name]:value
    })
   }

   generateId=()=>{
    return '_' + Math.random().toString(36).substr(2, 9);
   }

   saveToStorage=(todo)=>{

    
     let todos=JSON.parse(sessionStorage.getItem("todos"));

     if (todos===null) {
       todos=[];
     }

     todos.push(todo);

    sessionStorage.setItem("todos",JSON.stringify(todos));
   }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>headline</label>
            <input type="text" className="form-control" id="headline" name="headline"onChange={this.onChangeHandler} value={this.state.headline}></input>
          </div>
          <div className="form-group">
            <label>content</label>
            <textarea type="text" className="form-control " rows="10" id="content" name="content" onChange={this.onChangeHandler} value={this.state.content}></textarea>
          </div>
          <button type="submit" className="btn btn-success right" onClick={this.onClickHandler}>save</button>
        </form>
      </div>
    );
  }
}


