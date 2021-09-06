import React from "react";

function TasksClearCompleted({ clearCompleted }) {
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
