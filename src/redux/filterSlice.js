import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterContactsAction: (state, { payload }) => {
      return { ...state, filter: payload };
    },
  },
});

export const { filterContactsAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
