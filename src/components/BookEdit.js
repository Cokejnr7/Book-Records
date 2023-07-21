import { useState } from "react";

const BookEdit = ({ book, onEdit, onEditClick }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, title);
    onEditClick();
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
