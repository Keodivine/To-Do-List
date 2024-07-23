// src/pages/HomePage.js
import React, { useState } from 'react';
import TaskList from '../TaskList.jsx';
import TaskForm from '../TaskForm.jsx';
import FilterTasks from '../FilterTasks.jsx';
import SearchBar from '../SearchBar.jsx';

const HomePage = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [filter, setFilter] = useState({});

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const markTaskCompleted = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(newTasks);
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    const completedTask = tasks.find((task) => task.id === taskId);
    completedTasks.push({ ...completedTask, completedDate: new Date() });
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  };

  const applyFilters = (task) => {
    const { priority, status, dueDate } = filter;
    return (
      (priority ? task.priority === priority : true) &&
      (status ? task.status === status : true) &&
      (dueDate ? task.dueDate === dueDate : true)
    );
  };

  return (
    <div>
      <h2>Home</h2>
      <TaskForm addTask={addTask} />
      <FilterTasks setFilter={setFilter} />
      <SearchBar setFilter={setFilter} />
      <TaskList
        tasks={tasks.filter(applyFilters)}
        updateTask={updateTask}
        deleteTask={deleteTask}
        markTaskCompleted={markTaskCompleted}
      />
    </div>
  );
};

export default HomePage;
