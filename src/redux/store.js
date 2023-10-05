import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist'


import { contactsReducer } from './contactsSlice';

import { initialState } from './initialState';
import { filterReducer } from './filterSlice';


export const store = configureStore({
  preloadedState: initialState,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  } 
})



// const persistConfig = {
//   key: 'root',
//   storage,
// }



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


