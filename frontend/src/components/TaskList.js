import React from 'react';

const TaskItem = ({ task, onDelete, onComplete }) => {
    return (
        <div>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => onDelete(task._id)}>Delete</button>
            <button onClick={() => onComplete(task._id)}>Mark Complete</button>
        </div>
    );
};

export default TaskItem;
