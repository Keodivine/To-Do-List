// src/components/UpdateTaskForm.js
import React, { useState } from 'react';

const UpdateTaskForm = ({ task, updateTask, setIsEditing }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={updatedTask.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={updatedTask.description}
        onChange={handleChange}
        required
      />
      <select name="priority" value={updatedTask.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={updatedTask.dueDate}
        onChange={handleChange}
      />
      <button type="submit">Update Task</button>
      <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default UpdateTaskForm;
