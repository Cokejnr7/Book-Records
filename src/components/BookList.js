import BookShow from "./BookShow";

const BookList = ({ books, onDelete }) => {
  const renderedItems = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} />;
  });
  return <div className="book-list">{renderedItems}</div>;
};

export default BookList;
