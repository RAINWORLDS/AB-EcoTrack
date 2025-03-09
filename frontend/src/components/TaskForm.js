import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
    const [name, setName] = useState(task ? task.name : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
    const [priority, setPriority] = useState(task ? task.priority : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, description, dueDate, priority });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <input
                type="number"
                placeholder="Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            />
            <button type="submit">{task ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default TaskForm;
