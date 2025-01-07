import { createContext } from "react";

const formTasksInitialValues = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos || [];
};

export const tasks = formTasksInitialValues();

export const TasksContext = createContext();
