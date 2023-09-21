import React from "react";
import TaskShow from "./BookItem";
import { Box } from "@mui/material";
import styled from "styled-components";
import useBooksContext from "../hooks/useBooksContext";

const Reminder = styled(Box)`
  text-align: center;
  padding: ${(props) => (props.noBooks ? "25%" : "0")};
`;

function NoBooksMessage() {
  return (
    <Reminder noBooks>
      Add a new book...🍄💪🌟
    </Reminder>
  );
}

function BookList() {
  const { Books } = useBooksContext();
  const renderedBooksList = Books.map((book) => {
    return <TaskShow key={book.id} task={book} />;
  });

  return (
    <>
      {Books.length === 0 && <NoBooksMessage />}
      {renderedBooksList}
      console.log(Books);
    </>
  );
}

export default BookList;
