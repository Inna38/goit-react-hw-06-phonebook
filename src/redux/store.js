import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// --------------------------------------------
// import { createStore } from 'redux';

// const reducer = (state, actions) => {
//   switch (actions.type) {

//     case 'addContacts':

//       return { ...state, contacts: [...state.contacts, { ...actions.payload }] };

//     case 'deleteContacts':

//       return {...state, contacts: state.contacts.filter(contact => contact.id !== actions.payload)}

//     case 'filterContacts':

//       return { ...state, filter: actions.payload };

//     default:
//       return state;
//   }
// };

// export const store = createStore(reducer, {
//   contacts: [],
//   filter: '',
// });
