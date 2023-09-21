import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import styled from "styled-components";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

const BookContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-style: solid;
  border-width: 1px;
  margin: 2%;
  border-radius: 17px;
  border-color: lightgray;
`;

const BookContent = styled(Box)`
  display: flex;
  margin: auto;
  width: 80%;
  padding: 10px;
  align-items: center;
  gap: 20px;
`;

const BookInformation = styled(Typography)`
  text-decoration: ${({ isDeleted }) => (isDeleted ? "line-through" : "none")};
`;

function BookItem({ Book }) {
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
    content = <BookEdit onSubmit={handleSubmit} Book={Book} />;
  } else {
    content = (
      <>
        <BookInformation variant="h5">{Book.title}</BookInformation>
        <BookInformation variant="h7">{Book.description}</BookInformation>
      </>
    );
  }

  const handleDelete = () => {
    props.onDelete(props.task.id);
  };

  return (
    <BookContainer BookContainer>
      <img alt="books" src={`https://picsum.photos/seed/${Book.id}/300/200`} />
      <BookContent>{content}</BookContent>

      <Box>
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
      </Box>
    </BookContainer>
  );
}

export default BookItem;
