import { configureStore, createSlice } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
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

// --------------------------------------

// export const addContacts = payload => ({ type: "addContacts", payload })

// export const deleteContacts = payload => ({ type: "deleteContacts", payload })

// export const filterContacts = payload => ({ type: "filterContacts", payload })


const persistConfig = {
  key: 'root',
  storage,
}



const initialState = {
    contacts: [],
  filter: '',
}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducer: {
    addContacts: (state, { payload }) => {
      console.log(payload);
      return { ...state, contacts: [...state.contacts, {...payload }] }      
    },
    
      deleteContacts: (state, {payload}) => {
        return { ...state, contacts: state.contacts.filter(contact => contact.id !== payload) }
    },
      
    filterContacts: (state, {payload}) => {
         return { ...state, filter: payload };
      }
      
    }
})


export const { addContacts, deleteContacts, filterContacts } = contactsSlice.actions


export const contactsReducer = contactsSlice.reducer


export const store = configureStore({
  preloadedState: initialState,
  reducer: contactsReducer
})


