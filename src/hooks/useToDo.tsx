import { useState, useEffect } from "react";

const useToDo = () => {

    const [tasks, setTasks] = useState<string[]>(() => {

        const savedTasks = localStorage.getItem('tasks');

        return savedTasks ? JSON.parse(savedTasks) : ['Enter a task, click the \'X\' to remove a task',];

    });

    useEffect(() => {

        localStorage.setItem('tasks', JSON.stringify(tasks));

    }, [tasks]);

    const addTask = (task: string) => {

        setTasks([...tasks, task]);
        
    };

    const removeTask = (index: number) => {

        setTasks(tasks.filter((_, i) => i !== index));

    }

    return { tasks, addTask, removeTask };

}

export default useToDo;