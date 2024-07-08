
import React, { useState } from 'react'
import { addTodo } from '../store/todo/reducer';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
    const [description, setDescription] = useState('')
    const dispatch = useDispatch();

    function handleAdd(description){
      dispatch(addTodo({description:description}));
      setDescription('');
    }

  return (
    <div>
        <input type='text' onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
        <button onClick={()=>{handleAdd(description)}}>Add Todo</button>
    </div>
  )
}

export default TodoForm