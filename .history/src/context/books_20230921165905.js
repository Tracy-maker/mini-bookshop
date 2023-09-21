import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [Books, setBooks] = useState([]);

  const fetchBooks = () => {
    const localValue = localStorage.getItem("BOOKS");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  };

  const createTask = (title, description) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      status: "inProgress",
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
    setTasks(existingTasks);
  };

  const deleteTasksById = (id) => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = existingTasks.filter((task) => {
      return task.id !== id;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const editTaskById = (id, newTitle, newDescription) => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskToEdit = existingTasks.findIndex((task) => task.id === id);

    if (taskToEdit) {
      const updatedTask = {
        ...taskToEdit,
        title: newTitle,
        description: newDescription,
      };

      const updatedTasks = existingTasks.map((task) =>
        task.id === id ? updatedTask : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    }
  };
}

export { Provider };
export default BooksContext;
