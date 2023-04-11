import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

const Books = () => {
  const { books } = useSelector((state) => state);
  console.log(books);

  return (
    <div className="books-container">
      <div className="books">
        <ul>
          {books.map((book) => (
            <li key={book.item_id}>
              <p>{book.category}</p>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
      <Form />
    </div>
  );
};

export default Books;
