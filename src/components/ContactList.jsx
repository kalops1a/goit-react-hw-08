import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contactsSlice';
import Contact from './Contact'; 

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} /> 
      ))}
    </ul>
  );
};

export default ContactList;