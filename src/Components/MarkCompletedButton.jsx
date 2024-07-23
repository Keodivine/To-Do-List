// src/components/MarkCompletedButton.js
import React from 'react';

const MarkCompletedButton = ({ taskId, markTaskCompleted }) => {
  return <button onClick={() => markTaskCompleted(taskId)}>Mark as Completed</button>;
};

export default MarkCompletedButton;
