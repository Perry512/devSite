import React from "react";

import ToDoList from "../components/ToDoList.tsx";
import useToDo from "../hooks/useToDo.tsx";
import ToDoInput from "../components/ToDoInput.tsx";

const ToDo = () => {

    const { tasks, addTask, removeTask } = useToDo();
    
    const handleTodoSubmit = (task) => {

        if (task) {

            addTask(task);

        }

    };

    return (

        <div>
            <h3> To Do List </h3>
            <ToDoInput onToDoSubmit={handleTodoSubmit} />
            <ToDoList tasks={tasks} removeTask={removeTask} />
        </div>
    )
}

export default ToDo;