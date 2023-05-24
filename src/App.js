import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);

  // create a new book
  const addBook = (title) => {
    const updatedBooks = [...books, { id: Math.random().toString(), title }];
    setBooks(updatedBooks);
  };

  //deleted a book
  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  //Edit a book title
  const editBookByID = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID}/>
      <BookCreate onCreate={addBook} />
    </div>
  );
}

export default App;
