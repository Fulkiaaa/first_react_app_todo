import React from 'react'
import {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                className="todo-input" 
                placeholder='Changement de plan ?' />
                
            <button 
                type="submit" 
                className='todo-btn'>
                    Modifier
                </button>
        </form>
    )
}
