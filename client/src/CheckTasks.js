import React, { useContext } from "react";
import { TasksContext } from "./context/TasksContext";

function CheckTasks() {
  const { tasks, setTasks } = useContext(TasksContext);

  const completeAllTasks = () => {
    const updatedTasks = tasks.map((task) => {
      task.isCompleted = true;
      return task;
    });
    setTasks([...updatedTasks]);
  };
  return (
    <div className="">
      <button onClick={() => completeAllTasks()}>Check All</button>
    </div>
  );
}

export default CheckTasks;
