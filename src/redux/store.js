import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categorieSliceReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    catergories: categorieSliceReducer,
  },
});

export default store;
