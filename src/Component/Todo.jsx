import React, { useRef } from 'react'
import todo_icon from '../assets/todo_icon.png';
import TodoItem from './TodoItem';
const Todo = () => {

    

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl' >
            {/* -------------tittle------------ */}

            <div className='flex items-center mt-7 gap-2'>
                <img className='w-8' src={todo_icon} alt="Todo icon" />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>
            {/* -----------input-box------ */}

        <div className='flex items-center my-y bg-gray-200 rounded-full'>
            <input  className='border-0 bg-transparent outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task here' />
            <button className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD + </button>
        </div>

  {/* -----------todo-list------ */}
  <div>
        <TodoItem text="Learn React"/>
        <TodoItem text="Learn MERN"/>
  </div>

        </div>
    )
}

export default Todo
