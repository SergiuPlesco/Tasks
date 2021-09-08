import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const CheckBox = ({ task }) => {
  const { tasks, setTasks } = useContext(TasksContext);

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks([...updatedTasks]);
  };

  return (
    <input
      className="tasks__checkbox"
      type="checkbox"
      onChange={() => completeTask(task.id)}
      checked={task.isCompleted}
    />
  );
};

export default CheckBox;
