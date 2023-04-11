import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: () => {},
    removeBook: () => {},
  },
});

export default bookSlice.reducers;
