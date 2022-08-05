import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Check = ({ isCompleted }) => {
    return (
        <div className={
            `border-2 rounded-lg border-pink-500 ${isCompleted ? 'bg-pink-500' : ''} w-7 h-7 mr-2`
        }>
            { isCompleted &&
                <BsCheck size={ 24 } className='text-white duration-1000' />

            }

        </div>
    )
}

export default Check;