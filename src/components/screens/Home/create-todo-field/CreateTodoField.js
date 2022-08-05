import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {

    const [title, setTitle] = useState('')
    console.log(title);



    const addTodo = (title) => {
        setTodos(prev => [
            {
                _id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,

        ])
        setTitle('')
    }

    return (
        <div className='flex items-center mb-5 rounded-2xl bg-gray-800 p-5 w-full justify-between  '>

            <input
                className='bg-transparent w-full border-none outline-none hover:opacity-10 '
                type="text"
                onChange={ e => setTitle(e.target.value) }
                value={ title }
                onKeyPress={ e => e.key === "Enter" && addTodo(title) }
                placeholder="Введите заметку"
            />
        </div>
    )
}

export default CreateTodoField