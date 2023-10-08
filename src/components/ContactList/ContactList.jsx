import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';


export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ol>
      {filterContact.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ol>
  );
};
