import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../store/todo/reducer';

const TodoTable = () => {
    
    const todos = useSelector(store=>store)
    const dispatch = useDispatch();

    function handleDelete(id){
        dispatch(removeTodo({id:id}))
    }
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>description</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {todos.map( (todo, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{todo.description}</td>
                        <td><button onClick={()=>{handleDelete(todo.id, index)}}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TodoTable