import { useState } from "react";
import useBookContext from "../hooks/use-books-context";

function BookEdit(props) {
  const [title, setTitle] = useState(props.book.title);
  const { editBookByID } = useBookContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
    editBookByID(props.book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
