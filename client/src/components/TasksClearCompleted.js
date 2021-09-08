import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

function TasksClearCompleted() {
  const { tasks, setTasks } = useContext(TasksContext);

  const clearCompleted = () => {
    setTasks([...tasks].filter((task) => !task.isCompleted));
  };

  return (
    <div>
      <button
        onClick={() => {
          clearCompleted();
        }}
      >
        Clear completed
      </button>
    </div>
  );
}

export default TasksClearCompleted;
