import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'addContacts':
      return { ...state, contacts: [...state.contacts, { ...action.payload }] };

    case 'addName':
      return { ...state, contactsName: action.payload };

    case 'addNumber':
      return { ...state, contactsNumder: action.payload };


    case 'filterContacts':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export const store = createStore(reducer, {
  contacts: [],
  contactsName: [],
  contactsNumder: [],
  deleteContacts: [],
  filter: '',
});
