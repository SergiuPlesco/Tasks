import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

const Form = () => {
  const { tasks, setTasks, taskId, setTaskId } = useContext(TasksContext);

  const [inputValue, setInputValue] = useState("");

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

  return (
    <div className="form__container">
      <form className="form__container-form" onSubmit={addTask}>
        <input
          value={inputValue}
          onChange={(e) => handleInput(e)}
          className="form__container-input"
          type="text"
          placeholder="Enter your task"
        />
      </form>
    </div>
  );
};

export default Form;
