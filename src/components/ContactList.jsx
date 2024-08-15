import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../redux/contacts/selectors';
import { deleteContact } from '../redux/contacts/operations'; 

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;