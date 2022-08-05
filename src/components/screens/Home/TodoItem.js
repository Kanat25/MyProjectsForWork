import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'

import cn from 'classnames'
const TodoItem = ({todo,changeTodo, removeTodo}) => {
  return (
    <div className='flex items-center mb-5 rounded-2xl bg-gray-800 p-5 w-full justify-between'
    onClick={()=>changeTodo(todo._id)}>


    <Check isCompleted={todo.isCompleted}/> 

   <span className={cn({
    'line-through': todo.isCompleted
   })}>
   {todo.title}
   </span>

   <button onClick={()=> removeTodo(todo._id)}>
   <BsTrash size={22} className='text-gray-500 hover:text-red-900 transition-colors ease-in-out duration-900 '/>

   </button>
    </div>
  )
}

export default TodoItem