import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

 import { deleteContacts, filterContacts } from 'redux/store';

const LOCAL_KEY = 'contacts';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // const [contacts, setContacts] = useState(() => {
  //  return  JSON.parse(localStorage.getItem(LOCAL_KEY)) ??
  //     ''
  // });

   
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleContacts = user => {
    const userContact = contacts.find(contact => contact.name === user.name);
    if (userContact) {
      alert(`${user.name} is already in contacts.`);
      return;
    }
  };

  const handleFilter = e => {
    // dispatch({ type: 'filterContacts', payload: e.target.value });
    dispatch(filterContacts( e.target.value));
     
  };

  const deleteContact = id => {
    // dispatch({ type: 'deleteContacts', payload: id }); 
      dispatch(deleteContacts(id)); 
  };
  
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onContacts={handleContacts} />

      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />

      <ContactList contacts={filterContact} deleteContact={deleteContact} />
    </div>
  );
}
