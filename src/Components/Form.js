import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      item_id: Date.now(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addNewBook(obj));
    setAuthor('');
    setTitle('');
  };

  return (
    <div>
      <div>
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="bookname">
            <input
              type="text"
              name="bookname"
              id="input"
              required
              placeholder="Book title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label htmlFor="bookauthor">
            <input
              type="text"
              name="bookauthor"
              id="input"
              required
              placeholder="Author name"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            />
          </label>
          <button type="submit">Add book</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
