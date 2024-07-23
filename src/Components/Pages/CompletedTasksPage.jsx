// src/pages/CompletedTasksPage.js
import React, { useState, useEffect } from 'react';

const CompletedTasksPage = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setCompletedTasks(tasks);
  }, []);

  return (
    <div>
      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Completed on: {task.completedDate}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasksPage;
