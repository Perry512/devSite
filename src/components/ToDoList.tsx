import React from 'react';

const ToDoList = ({ tasks, removeTask }) => {

    return (
        <ul>
            {tasks.map((task, index) =>  (
                <li key={index}>
                    {task}
                    <button onClick={() => removeTask(index)}> X </button>
                </li>
                
            ))}
        </ul>
    )
}

export default ToDoList;