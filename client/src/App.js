import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import NoTasks from "./NoTasks";
import Header from "./Header";
import Form from "./Form";
import CheckTasks from "./CheckTasks";
import TasksRemaining from "./TasksRemaining";
import TasksClearCompleted from "./TasksClearCompleted";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskId, setTaskId] = useState(1);
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();

    if (inputValue.trim().length === 0) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: taskId,
        title: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
    setTaskId((prevId) => prevId + 1);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks([...updatedTasks]);
  };

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

  const clearCompleted = () => {
    setTasks([...tasks].filter((task) => !task.isCompleted));
  };

  const completeAllTasks = () => {
    const updatedTasks = tasks.map((task) => {
      task.isCompleted = true;
      return task;
    });
    setTasks([...updatedTasks]);
  };

  return (
    <div className="app">
      <Header />
      <Form
        addTask={addTask}
        inputValue={inputValue}
        handleInput={handleInput}
      />

      {tasks.length > 0 ? (
        <div className="tasks__container">
          <ul className="tasks__list">
            {tasks.map((task) => {
              return (
                <li className="tasks__item" key={task.id}>
                  <input
                    className="tasks__checkbox"
                    type="checkbox"
                    onChange={() => completeTask(task.id)}
                    checked={task.isCompleted}
                  />
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

                  <button
                    className="tasks__deleteButton"
                    onClick={() => deleteTask(task.id)}
                  >
                    <CloseIcon className="tasks__DeleteIcon" />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="section">
            <div className="footerOne__container">
              <CheckTasks completeAllTasks={completeAllTasks} />
              <TasksRemaining tasks={tasks} />
            </div>
          </div>
          <div className="section">
            <div className="footerTwo__container">
              <TasksClearCompleted clearCompleted={clearCompleted} />
            </div>
          </div>
        </div>
      ) : (
        <NoTasks />
      )}
    </div>
  );
};

export default App;
