import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [Books, setBooks] = useState([]);

  const fetchBooks = () => {
    const localValue = localStorage.getItem("BOOKS");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  };

  const createBook = (title, description) => {
    const newBook = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
    };

    const existingBooks = JSON.parse(localStorage.getItem("BOOKS")) || [];
    existingBooks.push(newBook);
    localStorage.setItem("BOOKS", JSON.stringify(existingBooks));
    setBooks(existingBooks);
  };

  const deleteBooksById = (id) => {
    const existingBooks = JSON.parse(localStorage.getItem("BOOKS")) || [];
    const updatedBooks = existingBooks.filter((book) => {
      return book.id !== id;
    });
    localStorage.setItem("BOOKS", JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle, newDescription) => {
    const existingBooks = JSON.parse(localStorage.getItem("BOOKS")) || [];
    const BookToEdit = existingBooks.findIndex((book) => book.id === id);

    if (BookToEdit) {
      const updatedBook = {
        ...BookToEdit,
        title: newTitle,
        description: newDescription,
      };

      const updatedBooks = existingBooks.map((book) =>
        book.id === id ? updatedBook : book
      );
      localStorage.setItem("BOOKS", JSON.stringify(updatedBooks));
      setBooks(updatedBooks);
    }
  };

  const valueToShare = {
    Books,
    deleteBooksById,
    createBook,
    editBookById,
    fetchBooks,
  };

  return <BooksContext.Provider>{children</BooksContext.Provider>;
}
export { Provider };
export default BooksContext;
