import React from 'react';

const Form = () => (
  <div>
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

export default Form;
