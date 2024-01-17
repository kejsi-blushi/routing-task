import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import books from "./BooksData";

const Book = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const book = books.find((book) => book.id.toString() === bookId);

  if (!book) {
    navigate("/books");
    return null;
  }

  const { title, author, year } = book;

  return (
    <div>
      <h2>Book Detail</h2>
      <p>{`Title: ${title}`}</p>
      <p>{`Author: ${author}`}</p>
      <p>{`Year: ${year}`}</p>
      <p>{`Current Path: ${location.pathname}`}</p>
      <button onClick={() => navigate("/books")} className="book-button">
        Go Back
      </button>
    </div>
  );
};

export default Book;
