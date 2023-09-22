import React from "react";
import { Box, Container, Stack } from "@mui/material";
import styled from "styled-components";
import useBooksContext from "../hooks/useBooksContext";
import BookItem from "./BookItem";

const Reminder = styled(Box)`
  text-align: center;
  padding: ${(props) => (props.noBooks ? "25%" : "0")};
`;

const CardWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap; /* Enable wrapping to create a row of cards */
  gap: 2%; /* Adjust the gap between cards */
  justify-content: flex-start; /* Align cards from left to right */
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
