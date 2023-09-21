import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import useBooksContext from "../hooks/useBooksContext";

const TaskEditBar = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

function BookEdit({ book, onSubmit }) {
  const { editBookById } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTitle = event.target.title.value;
    const newDescription = event.target.description.value;
    editBookById(book.id, newTitle, newDescription);
    onSubmit();
  };

  return (
    <TaskEditBar onSubmit={handleSubmit}>
      <TextField
        name="title"
        defaultValue={book.title}
        fullWidth
        placeholder="Please edit the book title"
      />
      <TextField
        name="description"
        defaultValue={book.description}
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
