import React from "react";
import TaskShow from "./BookItem";
import { Box } from "@mui/material";
import styled from "styled-components";
import useBooksContext from "../hooks/useBooksContext";

const Reminder = styled(Box)`
  text-align: center;
  padding: ${(props) => (props.noBooks ? "25%" : "0")};
`;

function BookList() {
  const { Books } = useBooksContext();
  const renderedBooksList = Books.map((book) => {
    return <TaskShow key={book.id} task={book} />;
  });

  return (
    <>
      <Reminder noBooks={Books.length === 0}>
        {Books.length === 0 && "Add a new book...🍄💪🌟"}
      </Reminder>
      {renderedBooksList}
    </>
  );
}

export default BookList;
