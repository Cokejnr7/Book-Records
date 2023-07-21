import { useState } from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  };

  const deleteBook = (id) => {
    const new_books = books.filter((book) => book.id !== id);
    setBooks(new_books);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBook} />
      <CreateBook onCreate={createBook} />
    </div>
  );
};

export default App;
