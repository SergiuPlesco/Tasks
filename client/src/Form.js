import React from "react";

function Form({ addTask, inputValue, handleInput }) {
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
}

export default Form;
