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

  const createBook = (title, description) => {
    const newBook = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
    };

    const existingBooks = JSON.parse(localStorage.getItem("BOOKS")) || [];
    existingBooks.push(newBook);
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
