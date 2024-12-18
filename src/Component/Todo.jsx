import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png';
import TodoItem from './TodoItem';
const Todo = () => {
    // const [todoList, setTodoList] = useState([])
    //yaha todos euta key ho
    //json.parse le string lai arrray ma convert garxa
    const[todoList,setTodoList]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
    const inputRef = useRef();
    //adding list item
    const add = () => {
        const inputText = inputRef.current.value.trim();
        console.log(inputText);
        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

//deleting the list item

const deleteTodo = (id)=>{
 setTodoList((preTodos)=>{
    return preTodos.filter((todo)=>todo.id!=id)
 })
}
//for toggling the list items
const toggle=(id)=>{
    setTodoList((preTodos)=>{
        return preTodos.map((todos)=>{
            if(todos.id===id){
                return{...todos,isComplete:!todos.isComplete}
            }
            return todos
        })
    })
}

useEffect(()=>{
    console.log(todoList)
    localStorage.setItem("todos",JSON.stringify(todoList));//it convert the string
},[todoList])

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl' >
            {/* -------------tittle------------ */}

            <div className='flex items-center mt-7 gap-2'>
                <img className='w-8' src={todo_icon} alt="Todo icon" />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>
            {/* -----------input-box------ */}

            <div className='flex items-center my-y bg-gray-200 rounded-full'>
                <input ref={inputRef} className='border-0 bg-transparent outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task here' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD + </button>
            </div>

            {/* -----------todo-list------ */}
            <div>
                {todoList.map((item, index) => {
                    return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
                })}

            </div>

        </div>
    )
}

export default Todo
