import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hook/useBookContext";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBook } = useBookContext();

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  const handleEditClick = () => setShowEdit(!showEdit);

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleEditClick} />
      ) : (
        book.title
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}></button>
        <button className="delete" onClick={handleDeleteClick}></button>
      </div>
    </div>
  );
};

export default BookShow;
