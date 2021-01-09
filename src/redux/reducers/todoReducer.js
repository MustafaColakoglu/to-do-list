import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function todoReducer(state=initialState.todos,action){

 

    switch (action.type) {
        case actionTypes.GET_TODOS:
            
            return action.payload===null?state:action.payload
    
        default:
            return state;
    }
}