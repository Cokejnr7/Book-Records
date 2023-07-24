import { useContext, useState } from "react";
import BookContext from "../context/book";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBook } = useContext(BookContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(book.id, title);
    onSubmit();
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        value={title}
        className="input"
        autoFocus
        onChange={handleChange}
      />
      <button className="button is-primary" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
};

export default BookEdit;
