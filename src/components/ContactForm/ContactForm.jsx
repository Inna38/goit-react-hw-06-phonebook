import { React, useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export function ContactForm({ onContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleForm = e => {
    const name = e.target.name;

    switch (name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onContacts({ name, number });

    setName('');
    setNumber('');
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
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleForm}
          />
        </label>

        <label htmlFor="tel" className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            id="tel"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleForm}
          />
        </label>
        <button className={css.btn} type="submite">
          Add contact
        </button>
      </form>
    </>
  );
}


ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
