import { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Image1 from "./image/7.jpg";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

const StyledContainer = styled(Stack)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  padding-top: 30px;
  background-image: url(${Image1});
  background-size: cover;
  background-repeat: no-repeat;
  gap: 20px;
`;

const BookForm = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  background-color: white;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled(Typography)`
  color: white;
  margin: auto;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

function App() {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <StyledContainer>
      <Title variant="h3" gutterBottom>
        🍄 🏰 Mini - BooksShop 🍄 🐢
      </Title>
      <BookForm>
        <CreateBook />
      </BookForm>
      <BookForm>
        <BookList />
      </BookForm>
    </StyledContainer>
  );
}
export default App;
