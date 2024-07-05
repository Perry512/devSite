import { useState } from "react";

const useToDo = () => {

    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) => {

        setTasks([...tasks, task]);
    };

    return { tasks, addTask };

}

export default useToDo;