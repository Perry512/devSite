import React, { useState } from "react";

const ToDoInput = ({ onToDoSubmit }) => {

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        const santizedMessage = message.replace(/[^a-zA-Z0-9 ]/g, "");
        onToDoSubmit(santizedMessage);
        setMessage('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter ToDo"
            />
            <button type="submit"> Enter </button>
        </form>
    );
};

export default ToDoInput;