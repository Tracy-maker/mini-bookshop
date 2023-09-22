import React from "react";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import useBooksContext from "../hooks/useBooksContext";
import BookItem from "./BookItem";

const Reminder = styled(Box)`
  text-align: center;
  padding: ${(props) => (props.noBooks ? "25%" : "0")};
`;

function NoBooksMessage() {
  return <Reminder noBooks>Add a new book...🍄💪🌟</Reminder>;
}

function BookList() {
  const { Books } = useBooksContext();
  const renderedBooksList = Books.map((book) => {
    return <BookItem key={book.id} book={book} />;
  });

  return (
    <Stack>
      {Books.length === 0 && <NoBooksMessage />}
      {renderedBooksList}
    </Stack>
  );
}

export default BookList;
