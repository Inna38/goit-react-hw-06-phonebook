import { useDispatch } from 'react-redux';

import { deleteContactsAction } from 'redux/contactsSlice';

import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContactsAction(id));
  };

  return (
    <li className={css.item}>
      <p className={css.name}>
        {name}: {number}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
