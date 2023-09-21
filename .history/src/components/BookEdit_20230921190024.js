import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import useBooksContext from "../hooks/useBooksContext";

const TaskEditBar = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

function BookEdit({ Book, onSubmit }) {
  const [formTask, setFormTask] = useState({
    title: Book.title,
    description: Book.description,
  });
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormTask({ ...formTask, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    edit
  };

  return (
    <TaskEditBar onSubmit={handleSubmit}>
      <TextField
        name="title"
        value={formTask.title}
        onChange={handleChange}
        fullWidth
        placeholder="Please edit the book title"
      />
      <TextField
        name="description"
        value={formTask.description}
        onChange={handleChange}
        fullWidth
        placeholder="Please edit the book description"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </TaskEditBar>
  );
}

export default BookEdit;
