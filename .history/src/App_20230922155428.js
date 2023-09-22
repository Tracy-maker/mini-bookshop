import { useContext, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

const StyledContainer = styled(Stack)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  padding-top: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  gap: 20px;
`;

const BookForm = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  background-color: #f0f8ff;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BookListForm = styled(Box)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  background-color: #f0f8ff;
  border-radius: 15px;
`;

const Title = styled(Typography)`
  margin: auto;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StyledContainer>
      <Title variant="h3" gutterBottom>
        🍄 🏰 Mini - BooksShop 🍄 🐢
      </Title>
      <BookForm>
        <CreateBook />
      </BookForm>
      <BookListForm>
        <BookList />
      </BookListForm>
    </StyledContainer>
  );
}
export default App;
