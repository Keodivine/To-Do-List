// src/components/FilterTasks.js
import React from 'react';

const FilterTasks = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  return (
    <div>
      <select name="priority" onChange={handleFilterChange}>
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select name="status" onChange={handleFilterChange}>
        <option value="">All Statuses</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
      <input type="date" name="dueDate" onChange={handleFilterChange} />
    </div>
  );
};

export default FilterTasks;
