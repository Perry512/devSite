import React from "react";

import ToDoList from "../components/ToDoList.tsx";
import useToDo from "../hooks/useToDo.tsx";
import ToDoInput from "../components/ToDoInput.tsx";

import styles from "../styles/styles.module.css";

const ToDo = () => {

    const { tasks, addTask, removeTask } = useToDo();
    
    const handleTodoSubmit = (task) => {

        if (task) {

            addTask(task);

        }

    };

    return (

        <div className={styles.middleWidget}>
            <div className={styles.todoDiv}> 
                <div className={styles.todoInput}>
                <h3> To Do List </h3>
                <ToDoInput onToDoSubmit={handleTodoSubmit} />
                </div>
                <div className={styles.todoTasksDisplay}>
                    <ToDoList tasks={tasks} removeTask={removeTask} />
                </div>
            </div>
        </div>
    )
}

export default ToDo;