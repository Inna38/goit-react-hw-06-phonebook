import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const LOCAL_KEY = 'contacts';

export function App() {
  const dispatch = useDispatch();

  let contacts = useSelector(state => state.contacts);

  // const [contacts, setContacts] = useState(() => {
  //  return  JSON.parse(localStorage.getItem(LOCAL_KEY)) ??
  //     ''
  // });

  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleContacts = user => {
    const userContact = contacts.find(contact => contact.name === user.name);
    if (userContact) {
      alert(`${user.name} is already in contacts.`);
      return;
    }
    dispatch({ type: 'addContacts', payload: { ...user, id: nanoid() } });
    // setContacts(prev => [...prev, { ...user, id: nanoid() }]);
  };

  const handleFilter = e => {
    dispatch({ type: 'filterContacts', payload: e.target.value });
  };

  const deleteContact = id => {
    contacts = contacts.filter(contact => contact.id !== id);
    dispatch({ type: 'addContacts', payload: contacts });

    // setContacts(contacts.filter(el => el.id !== id));
  };
  console.log(contacts);
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
