import React from 'react';

import { useDispatch } from 'react-redux';

import { filterContactsAction } from 'redux/filterSlice';

import css from './Filter.module.css';


export const Filter = () => {
  const dispatch = useDispatch();
  
    const handleFilter = e => {
    // dispatch({ type: 'filterContacts', payload: e.target.value });
    dispatch(filterContactsAction(e.target.value));
  };

  return (
      <label htmlFor="filter" className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          id="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleFilter}
        />
      </label>
    );
}

