import { useState } from "react";
import useBookContext from "../hook/useBookContext";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBook } = useBookContext();

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
