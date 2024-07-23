// src/components/DeleteTaskButton.js
import React from 'react';

const DeleteTaskButton = ({ taskId, deleteTask }) => {
  return <button onClick={() => deleteTask(taskId)}>Delete</button>;
};

export default DeleteTaskButton;
