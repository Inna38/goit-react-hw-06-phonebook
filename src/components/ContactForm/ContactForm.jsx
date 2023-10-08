import { React } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContactsAction } from 'redux/contactsSlice';

import css from './ContactForm.module.css';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const userContacts = contacts.find(contact => contact.name === name);

    if (userContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContactsAction({ name, number, id: nanoid() }));

    const form = e.currentTarget;
    form.reset();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            id="name"
            //  value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="tel" className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            id="tel"
            //  value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submite">
          Add contact
        </button>
      </form>
    </>
  );
}

