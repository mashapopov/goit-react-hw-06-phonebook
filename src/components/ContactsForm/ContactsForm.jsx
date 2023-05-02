import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { AddButton, Form, FormInput, Label } from './ContactsForm.styled';
import { addContacts } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';

export function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const addNewContact = {
      id: nanoid(),
      name,
      number,
    };
    handleCheck(addNewContact);
    setName('');
    setNumber('');
  };

  const handleCheck = addNewContact => {
    contactList.find(
      contact => contact.name.toLowerCase() === addNewContact.name.toLowerCase()
    )
      ? alert(`${name}is already in contacts.`)
      : dispatch(addContacts(addNewContact));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </Label>
      <Label htmlFor="number">
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </Label>
      <AddButton type="submit" onSubmit={onSubmit}>
        Add contact
      </AddButton>
    </Form>
  );
}
