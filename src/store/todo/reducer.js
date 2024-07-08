
import { createSlice } from "@reduxjs/toolkit";

let lastIndex = 2;
let state = [{id:1, description:"task1"}, {id:2, description:"task2"}]

const slice = createSlice({
    name:"todoStore",
    initialState:state,
    reducers:{
        addTodo: (state, action)=>{
            return [...state, {id:++lastIndex, description:action.payload.description}];
        },
        removeTodo: (state, action)=>{
            return state.filter( todo => todo.id!=action.payload.id)
        }
    }
})

export const {addTodo, removeTodo} = slice.actions;
export default slice.reducer;