import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import CloseIcon from "@material-ui/icons/Close";

const DeleteButton = ({ task }) => {
  const { tasks, setTasks } = useContext(TasksContext);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <button className="tasks__deleteButton" onClick={() => deleteTask(task.id)}>
      <CloseIcon className="tasks__DeleteIcon" />
    </button>
  );
};

export default DeleteButton;
