import { useState } from "react";
import useBookContext from "../hook/useBookContext";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">create</button>
      </form>
    </div>
  );
};

export default BookCreate;
