import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";

function NoTasks() {
  return (
    <div className="no-tasks__container">
      <AssignmentIcon />
      <p className="no-tasks__text">Add tasks first...</p>
    </div>
  );
}

export default NoTasks;
