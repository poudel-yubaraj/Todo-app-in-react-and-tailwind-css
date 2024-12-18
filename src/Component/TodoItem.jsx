import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
const TodoItem = ({text, id ,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer '>
            <img src={isComplete?tick:not_tick} alt="tick icon" className='w-7' />
            <p className={`text-slate-700 ml-7 text-[17px] ${isComplete?"line-through":""} text-decoration-slate-500`}>{text} </p>
        </div>
        <img  onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />
    </div>
  )
}

export default TodoItem
