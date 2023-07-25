import BookShow from "./BookShow";
import useBookContext from "../hook/useBookContext";

const BookList = () => {
  const { books } = useBookContext();

  const renderedItems = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedItems}</div>;
};

export default BookList;
