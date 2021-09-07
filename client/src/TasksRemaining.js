import React, { useContext, useMemo } from "react";
import { TasksContext } from "./context/TasksContext";

function TasksRemaining() {
  const { tasks } = useContext(TasksContext);

  const tasksRemaining = () => {
    return tasks.filter((task) => !task.isCompleted).length;
  };

  const remaining = useMemo(tasksRemaining, [tasks]);

  return (
    <div className="tasks-remaining__container">
      {remaining} remaining tasks.
    </div>
  );
}

export default TasksRemaining;
