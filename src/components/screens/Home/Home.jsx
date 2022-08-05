import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './TodoItem'

const data = [
    {
        _id:"1",
        title: "finish the essay coloboration",
        isCompleted: false

    },
    {
        _id:"2",

        title: "lorem ewfwefwefr23r",
        isCompleted: false

    },
    {
        _id:"3",

        title: "finish the school",
        isCompleted: false

    }
]


const Home = () => {

    const [todos,setTodos]= useState(data)


    const  changeTodo =id=>{
        const copy =[...todos]

        const current=copy.find (t=> t._id=== id)
        current.isCompleted=!current.isCompleted
        setTodos(copy)
    }


    const  removeTodo = (id) =>{
        setTodos([...todos].filter(t=> t._id !==id))

    }
    // const deleteItem = (id) =>
    // setItems((items) => items.filter((item) => item.id !== id));
    
 

    return (
        <div className=' text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-10'>
            Список заметок
        </h1>
        <CreateTodoField setTodos={setTodos}/>

            {
                todos.map(todo =>
                (
                    <TodoItem
                     key={todo._id}
                      todo={ todo } 
                      changeTodo={changeTodo}
                      removeTodo={removeTodo}
                       />


                ))
            }
        </div>
    )
}

export default Home