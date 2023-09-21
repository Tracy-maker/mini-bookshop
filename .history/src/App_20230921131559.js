import { useState, useEffect } from "react";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Image1 from "./image/7.jpg";
import TaskButton from "./components/TaskButton";

const StyledContainer = styled(Stack)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  padding-top: 3%;
  background-image: url(${Image1});
  background-size: cover;
  background-repeat: no-repeat;
`;

const TaskForm = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  background-color: white;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled(Typography)`
  color: white;
  margin: auto;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

function App() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("tasks");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const handleFilterTasks = (filter) => {
    setFilter(filter);
  };

  let filteredTasks = tasks;
  if (filter !== "all") {
    filteredTasks = tasks.filter((task) => task.status === filter);
  }

  const toggleCheckedBoxById = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        let nextStatus;
        if (task.status === "done") {
          nextStatus = "inProgress";
        } else {
          nextStatus = "done";
        }
        return {
          ...task,
          status: nextStatus,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <StyledContainer>
      <Title variant="h3" gutterBottom>
      🍄 🏰 Mini-BooksShop 🍄 🐢 
      </Title>
      <TaskForm>
        <CreateTask onCreate={createTask} />
        <TaskButton defaultValue={filter} onFilterChange={handleFilterTasks} />
        <TaskList
          toggleCheckedBoxById={toggleCheckedBoxById}
          tasks={filteredTasks}
          onDelete={deleteTasksById}
          onEdit={editTaskById}
        />
      </TaskForm>
    </StyledContainer>
  );
}
export default App;
