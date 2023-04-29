import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import { deleteBook, fetchPosts } from '../redux/books/booksSlice';
import './styles.css';
import Form from './Form';

const background = {
  background: 'conic-gradient(#4386bf 220deg, #ededed 0deg',
};

const background1 = {
  background: 'conic-gradient(#4386bf 300deg, #ededed 0deg',
};

const Books = () => {
  const { books } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="books-container">
      <div className="books">
        <ul className="list-books">
          {books.isLoading ? (
            <div className="loader">
              <MoonLoader className="loaderstyle" />
            </div>
          ) : (
            books.booksItem?.map((book, index) => (
              <li className="book-item" key={book.item_id}>
                <div className="description">
                  <p className="category">{book.category}</p>
                  <h2 className="title">{book.title}</h2>
                  <p className="author">{book.author}</p>
                  <div className="btns">
                    <button className="btn" type="button">
                      Comments
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => dispatch(deleteBook(book.item_id))}
                    >
                      Remove
                    </button>
                    <button className="btn" type="button">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="box">
                  <div className="percent">
                    <div
                      className="progress"
                      style={index % 2 === 0 ? background : background1}
                    >
                      <svg />
                    </div>
                    <div className="number">
                      <h2>{index % 2 === 0 ? '64%' : '90%'}</h2>
                      <p>Completed</p>
                    </div>
                  </div>
                  <div className="chapters">
                    <div className="chapter">
                      <p>CURRENT CHAPTER</p>
                      <p>{index % 2 !== 0 ? 'Chapter 17' : 'Introduction'}</p>
                    </div>
                    <div className="chapter-btn">
                      <button className="chap-btn" type="button">
                        UPDATE PROGRESS
                      </button>
                    </div>
                  </div>
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
