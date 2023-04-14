import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './form.css';
import { addNewBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      item_id: Date.now(),
      title,
      author,
      category,
    };
    dispatch(addNewBook(obj));
    setAuthor('');
    setTitle('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2 className="add-book">ADD NEW BOOK</h2>
      <div>
        <form className="form" action="#" onSubmit={handleSubmit}>
          <label htmlFor="bookname">
            <input
              type="text"
              name="bookname"
              className="input"
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
              className="input"
              name="bookauthor"
              id="input"
              required
              placeholder="Author name"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            />
          </label>
          <select
            required
            name="category"
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Action">Action</option>
            <option value="Animation">Animation</option>
            <option value="Fiction">Science Fiction</option>
            <option value="Legend">Legend</option>
          </select>
          <button className="submit-btn" type="submit">Add book</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
