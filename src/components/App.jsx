import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { deleteContactsAction } from 'redux/contactsSlice';
import { filterContactsAction } from 'redux/filterSlice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleFilter = e => {
    // dispatch({ type: 'filterContacts', payload: e.target.value });
    dispatch(filterContactsAction(e.target.value));
  };

  const deleteContact = id => {
    // dispatch({ type: 'deleteContacts', payload: id });
    dispatch(deleteContactsAction(id));
  };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />

      <ContactList contacts={filterContact} deleteContact={deleteContact} />
    </div>
  );
}
