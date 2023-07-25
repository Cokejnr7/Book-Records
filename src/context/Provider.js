import { useState } from "react";
import BookContext from "./book";
import { useCallback } from "react";
import axios from "axios";

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books", {
      headers: { "Content-Type": "application/json" },
    });

    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });

    setBooks([...books, response.data]);
  };

  const deleteBook = (id) => {
    const new_books = books.filter((book) => book.id !== id);
    setBooks(new_books);
  };

  const editBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const editedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(editedBooks);
  };

  return (
    <BookContext.Provider
      value={{ books, fetchBooks, createBook, editBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default Provider;
