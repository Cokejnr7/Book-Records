import { useState } from "react";
import CreateBook from "./components/CreateBook";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { title }]);
  };

  return (
    <div className="app">
      <CreateBook onCreate={createBook} />
    </div>
  );
};

export default App;
