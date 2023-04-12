import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line operator-linebreak
const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/E8Cuml3CRXudMdh0iI68/books';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addNewBook = createAsyncThunk(
  'posts/addNewPosts',
  async (initialPost) => {
    try {
      const response = await axios.post(url, initialPost);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const initialState = {
  booksItem: [],
  isLoading: true,
  error: null,
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
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchPosts.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        booksItem: action.payload,
      }))
      .addCase(fetchPosts.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addNewBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addNewBook.fulfilled, (state, action) => ({
        ...state,
        booksItem: action.payload,
        isLoading: false,
      }))
      .addCase(addNewBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
