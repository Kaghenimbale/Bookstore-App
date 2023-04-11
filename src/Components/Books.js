import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Form from './Form';

const Books = () => {
  const { books } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="books-container">
      <div className="books">
        <ul>
          {books.booksItem.map((book) => (
            <li key={book.item_id}>
              <p>{book.category}</p>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <div className="btns">
                <button
                  type="button"
                  onClick={() => dispatch(removeBook(book.item_id))}
                >
                  remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Form />
    </div>
  );
};

export default Books;
