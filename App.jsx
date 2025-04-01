import { useState } from "react";
import "./styles.css";

export default function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");

  const addBook = () => {
    if (bookName.trim() !== "") {
      setBooks([...books, bookName]);
      setBookName("");
    }
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>BookHive</h1>
      <div className="input-container">
        <input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          placeholder="Enter book name"
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book} <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
