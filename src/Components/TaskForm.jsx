// src/components/AddTaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    id: Date.now(),
    name: '',
    description: '',
    priority: 'Low',
    status: 'Incomplete',
    dueDate: '',
    priorityColor: 'green'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      id: Date.now(),
      name: '',
      description: '',
      priority: 'Low',
      status: 'Incomplete',
      dueDate: '',
      priorityColor: 'green'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
