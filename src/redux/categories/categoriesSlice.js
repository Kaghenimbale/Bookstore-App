import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categorieSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = categorieSlice.actions;

export default categorieSlice.reducer;
