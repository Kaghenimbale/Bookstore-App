import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categorieSlice = createSlice({
  name: 'catergories',
  initialState,
  reducers: {
    checkStatus: 'Under construction',
  },
});

export const { checkStatus } = categorieSlice.actions;

export default categorieSlice.reducer;
