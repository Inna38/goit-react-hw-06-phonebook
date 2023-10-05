import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  filter: '',
}

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducer: {
         filterContactsAction: (state, { payload }) => {
      return { ...state, filter: payload };
    },
    }
})

export const { filterContactsAction } = filterSlice.actions
export const filterReducer = filterSlice.reducer