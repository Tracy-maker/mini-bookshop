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
    // Retrieve the current books data from local storage
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  
    // Find the index of the book with the specified id in the local storage data
    const bookIndex = storedBooks.findIndex((book) => book.id === id);
  
    if (bookIndex !== -1) {
      // If the book with the specified id is found, update its properties
      storedBooks[bookIndex] = {
        ...storedBooks[bookIndex],
        title: newTitle,
        description: newDescription,
      };
  
      // Update the books data in local storage
      localStorage.setItem('books', JSON.stringify(storedBooks));
  
      // Update the state if necessary (assuming you're using React)
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
