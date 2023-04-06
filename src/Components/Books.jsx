import React from 'react';

const Books = () => {
  const books = [
    {
      title: 'Html Mastering',
      author: 'James Arthur',
    },
    {
      title: 'CSS Mastering',
      author: 'James Williams',
    },
    {
      title: 'JavaScript Mastering',
      author: 'Jane Doe',
    },
    {
      title: 'React Mastering',
      author: 'John Doe',
    },
  ];
  return (
    <div className="books-container">
      <div className="books">
        {books.map((book) => {
          return (
            <ul>
              <li>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
              </li>
            </ul>
          );
        })}
      </div>
      <div>
        <form action="#">
          <label htmlFor="bookname">
            <input
              type="text"
              name="bookname"
              id="input"
              placeholder="Book title"
            />
          </label>
          <label htmlFor="bookauthor">
            <input
              type="text"
              name="bookauthor"
              id="input"
              placeholder="Author name"
            />
          </label>
          <button type="submit">Add book</button>
        </form>
      </div>
    </div>
  );
};

export default Books;
