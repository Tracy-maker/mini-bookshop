import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import useBooksContext from "../hooks/useBooksContext";
import { Box } from "@mui/material";

const EditBar = styled(Box)`
  display: flex;
  flex-direction: column;
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
    <EditBar component="form" onSubmit={handleSubmit}>
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
    </EditBar>
  );
}

export default BookEdit;
