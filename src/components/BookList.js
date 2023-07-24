import BookShow from "./BookShow";
import BookContext from "../context/book";
import { useContext } from "react";

const BookList = () => {
  const { books } = useContext(BookContext);

  const renderedItems = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedItems}</div>;
};

export default BookList;
