import React, { useContext } from "react";
import CheckTasks from "./CheckTasks";
import TasksRemaining from "./TasksRemaining";
import TasksFilters from "./TasksFilters";
import TasksClearCompleted from "./TasksClearCompleted";
import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";
import { TasksContext } from "./context/TasksContext";

const TasksList = () => {
  const { tasks, setTasks, filterTasks } = useContext(TasksContext);
  const markAsEditing = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isEditing = true;
      }
      return task;
    });
    setTasks([...updatedTasks]);
  };

  const updateTask = (e, id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (e.target.value.trim().length === 0) {
          task.isEditing = false;
          return task;
        }
        task.title = e.target.value;
        task.isEditing = false;
      }
      return task;
    });
    setTasks([...updatedTasks]);
  };

  const cancelEditing = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isEditing = false;
      }
      return task;
    });
    setTasks([...updatedTasks]);
  };
  return (
    <div className="tasks__container">
      <ul className="tasks__list">
        {filterTasks().map((task) => {
          return (
            <li className="tasks__item" key={task.id}>
              <CheckBox task={task} />
              {!task.isEditing ? (
                <span
                  onDoubleClick={() => markAsEditing(task.id)}
                  className={`tasks__text ${
                    task.isCompleted ? "line-through" : ""
                  }`}
                >
                  {task.title}
                </span>
              ) : (
                <input
                  className="tasks__text-input"
                  type="text"
                  onBlur={(e) => updateTask(e, task.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTask(e, task.id);
                    } else if (e.key === "Escape") {
                      cancelEditing(task.id);
                    }
                  }}
                  defaultValue={task.title}
                  autoFocus
                />
              )}

              <DeleteButton task={task} />
            </li>
          );
        })}
      </ul>
      <div className="section">
        <div className="footerOne__container">
          <CheckTasks />
          <TasksRemaining />
        </div>
      </div>
      <div className="section">
        <div className="footerTwo__container">
          <TasksFilters />
          <TasksClearCompleted />
        </div>
      </div>
    </div>
  );
};

export default TasksList;
