import * as actionTypes from "./actionTypes"

export function getToDoSuccess(todos){

    return{
        type:actionTypes.GET_TODOS,
        payload:todos
    }
}

export function getToDos(){
    return function(dispatch){
        
        return  dispatch(getToDoSuccess(JSON.parse(sessionStorage.getItem("todos"))))
    } 
}