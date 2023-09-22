import React from "react";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import useBooksContext from "../hooks/useBooksContext";
import BookItem from "./BookItem";

const Reminder = styled(Box)`
  text-align: center;
  padding: ${(props) => (props.noBooks ? "25%" : "0")};
`;

const CardWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap; 
  justify-content: flex-start; 
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
    <CardWrapper>
      {Books.length === 0 && <NoBooksMessage />}
      {renderedBooksList}
    </CardWrapper>
  );
}

export default BookList;
