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
      await axios.post(url, initialPost);
      return initialPost;
    } catch (error) {
      return error.message;
    }
  },
);

export const deleteBook = createAsyncThunk(
  'posts/deleteBook',
  async (itemId) => {
    try {
      await axios.delete(`${url}/${itemId}`);
      return itemId;
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
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const newData = Object.keys(action.payload).map((item) => {
          const data = action.payload[item][0];
          return {
            item_id: item,
            author: data.author,
            title: data.title,
            category: data.category,
          };
        });
        return {
          ...state,
          isLoading: false,
          booksItem: newData,
        };
      })
      .addCase(fetchPosts.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(addNewBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addNewBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        booksItem: [...state.booksItem, action.payload],
      }))
      .addCase(addNewBook.rejected, (state) => ({
        ...state,
        booksItem: [],
        isLoading: false,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteBook.fulfilled, (state, action) => {
        const newBooks = state.booksItem.filter(
          (item) => item.item_id !== action.payload,
        );
        return {
          ...state,
          isLoading: false,
          booksItem: newBooks,
        };
      })
      .addCase(deleteBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default bookSlice.reducer;
