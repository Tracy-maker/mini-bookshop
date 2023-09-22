import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import styled from "styled-components";
import { Box, Card, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

const BookContainer = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
  border-style: solid;
  border-width: 1px;
  margin: 2%;
  width: 330px;
  border-radius: 17px;
  border-color: lightgray;
`;

const BookContent = styled(Stack)`
  display: flex;
  direction: column;
  margin: auto;
  width: 80%;
  padding: 10px;
  align-items: center;
  gap: 20px;
`;

const BookInformation = styled(Typography)`
  font-size: small;
`;

// const ChoiceBox = styled(Stack)`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

function BookItem({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBooksById } = useBooksContext();

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content;

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  } else {
    if (
      typeof book.title === "string" &&
      typeof book.description === "string"
    ) {
      content = (
        <>
          <BookInformation variant="h5">{book.title}</BookInformation>
          <BookInformation variant="body1">{book.description}</BookInformation>
        </>
      );
    } else {
      content = (
        <>
          <Typography variant="h5">Invalid Title</Typography>
          <Typography variant="body1">Invalid Description</Typography>
        </>
      );
    }
  }

  const handleDelete = () => {
    deleteBooksById(book.id);
  };

  return (
    <BookContainer>
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <BookContent>{content}</BookContent>

      <ChoiceBox>
        <Chip
          variant="outlined"
          color="success"
          onClick={handleEdit}
          icon={<EditIcon />}
        />
        <Chip
          variant="outlined"
          color="error"
          onClick={handleDelete}
          icon={<DeleteIcon />}
        />
      </ChoiceBox>
    </BookContainer>
  );
}

export default BookItem;