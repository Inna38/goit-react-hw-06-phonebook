import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContactsAction: (state, { payload }) => {
      return { ...state, contacts: [...state.contacts, { ...payload }] };
    },

    deleteContactsAction: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
  },
});

export const { addContactsAction, deleteContactsAction } =
  contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
