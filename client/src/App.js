import { useState } from "react";
import NoTasks from "./components/NoTasks";
import Header from "./components/Header";
import Form from "./components/Form";
import useLocalStorage from "./hooks/useLocalStorage";
import { TasksContext } from "./context/TasksContext";
import "./App.css";
import TasksList from "./components/TasksList";

const App = () => {
  const [taskId, setTaskId] = useLocalStorage("taskId", 1);
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTasks = () => {
    if (activeFilter === "All") {
      return tasks;
    } else if (activeFilter === "Active") {
      return tasks.filter((task) => !task.isCompleted);
    } else if (activeFilter === "Completed") {
      return tasks.filter((task) => task.isCompleted);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        taskId,
        setTaskId,
        activeFilter,
        setActiveFilter,
        filterTasks,
      }}
    >
      <div className="app">
        <Header />
        <Form />

        {tasks.length > 0 ? <TasksList /> : <NoTasks />}
      </div>
    </TasksContext.Provider>
  );
};

export default App;
