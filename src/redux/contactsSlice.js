import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  contacts: [],
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducer: {
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

export const { addContactsAction, deleteContactsAction, filterContactsAction } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
