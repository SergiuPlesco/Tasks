import React from "react";

function TasksRemaining({ tasks }) {
  const tasksRemaining = (tasks) => {
    return tasks.filter((task) => !task.isCompleted).length;
  };
  return (
    <div className="tasks-remaining__container">
      {tasksRemaining(tasks)} remaining tasks.
    </div>
  );
}

export default TasksRemaining;
