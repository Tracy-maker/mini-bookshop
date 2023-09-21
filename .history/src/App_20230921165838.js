import { useState, useEffect } from "react";
import CreateTask from "./components/CreateBook";
import TaskList from "./components/BookList";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Image1 from "./image/7.jpg";

const StyledContainer = styled(Stack)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  padding-top: 30px;
  background-image: url(${Image1});
  background-size: cover;
  background-repeat: no-repeat;
  gap: 20px;
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
 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <StyledContainer>
      <Title variant="h3" gutterBottom>
        🍄 🏰 Mini - BooksShop 🍄 🐢
      </Title>
      <TaskForm>
        <CreateTask onCreate={createTask} />
      </TaskForm>
      <TaskForm>
        <TaskList
          tasks={tasks}
          onDelete={deleteTasksById}
          onEdit={editTaskById}
        />
      </TaskForm>
    </StyledContainer>
  );
}
export default App;
