import React from "react";

function CheckTasks({ completeAllTasks }) {
  return (
    <div className="">
      <button onClick={() => completeAllTasks()}>Check All</button>
    </div>
  );
}

export default CheckTasks;
