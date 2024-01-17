import React from "react";
import { Link } from "react-router-dom";
import books from "./BooksData";

const BookList = () => {
  return (
    <div>
      <h2>List of Books</h2>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`} className="book-link">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
