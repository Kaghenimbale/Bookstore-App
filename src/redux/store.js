import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categorieSliceReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categorieSliceReducer,
  },
});

export default store;
