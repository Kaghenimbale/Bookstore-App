import { createSlice } from '@reduxjs/toolkit';
// import { act } from '@testing-library/react';

const books = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const initialState = {
  booksItem: books,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksItem.push(action.payload);
    },
    removeBook: (state, action) => {
      const booksItem = state.booksItem.filter(
        (item) => item.item_id !== action.payload,
      );
      return {
        ...state,
        booksItem,
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
