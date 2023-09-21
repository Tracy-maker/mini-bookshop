import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [Books, setBooks] = useState([]);

  const fetchBooks = () => {
    const localValue = localStorage.getItem("BOOKS"){
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  }}

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
    
    const storedBooks = JSON.parse(localStorage.getItem('BOOKS')) || [];
    const bookIndex = storedBooks.findIndex((book) => book.id === id);
  
    if (bookIndex !== -1) {
      storedBooks[bookIndex] = {
        ...storedBooks[bookIndex],
        title: newTitle,
        description: newDescription,
      };
      localStorage.setItem('BOOKS', JSON.stringify(storedBooks));
      setBooks(storedBooks);
    }
  };
  

  const valueToShare = {
    Books,
    deleteBooksById,
    createBook,
    editBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
