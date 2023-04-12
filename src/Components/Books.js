import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import { removeBook, fetchPosts } from '../redux/books/booksSlice';
import Form from './Form';

const Books = () => {
  const { books } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const myBooks = Object.keys(books.booksItem).map((item) => ({
    ...books.booksItem[item][0],
    id: item,
  }));

  return (
    <div className="books-container">
      <div className="books">
        <ul>
          {books.isLoading ? (
            <>
              <MoonLoader color="black" />
            </>
          ) : (
            myBooks.map((book) => (
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
            ))
          )}
        </ul>
      </div>
      <Form />
    </div>
  );
};

export default Books;
