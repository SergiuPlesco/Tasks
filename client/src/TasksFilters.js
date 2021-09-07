import React, { useContext, useState } from "react";
import { TasksContext } from "./context/TasksContext";

function TasksFilters() {
  const { tasks, setTasks, activeFilter, setActiveFilter, filterTasks } =
    useContext(TasksContext);

  return (
    <div className="taskFilters__container">
      <button
        onClick={() => {
          setActiveFilter("All");
          filterTasks();
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setActiveFilter("Active");
          filterTasks();
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          setActiveFilter("Completed");
          filterTasks();
        }}
      >
        Completed
      </button>
    </div>
  );
}

export default TasksFilters;
