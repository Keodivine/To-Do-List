// src/components/TaskItem.js
import React, { useState } from 'react';
import UpdateTaskForm from './UpdateTaskForm';
import DeleteTaskButton from './DeleteTaskButtorn';
import MarkCompletedButton from './MarkCompletedButton';

const TaskItem = ({ task, updateTask, deleteTask, markTaskCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={{ border: `2px solid ${task.priorityColor}`, padding: '10px', margin: '10px' }}>
      {isEditing ? (
        <UpdateTaskForm task={task} updateTask={updateTask} setIsEditing={setIsEditing} />
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <p>Due Date: {task.dueDate}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteTaskButton taskId={task.id} deleteTask={deleteTask} />
          <MarkCompletedButton taskId={task.id} markTaskCompleted={markTaskCompleted} />
        </div>
      )}
    </div>
  );
};

export default TaskItem;
