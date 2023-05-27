import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context";

function BookShow(props) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookByID } = useBookContext();

  const handleDelete = () => {
    deleteBookByID(props.book.id);
  };
  const handleEdit = (event) => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{props.book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={props.book} />;
  }
  return (
    <div className="book-show">
      <img
        alt="books"
        src={`https://picsum.photos/seed/${props.book.id}/300/200`}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
