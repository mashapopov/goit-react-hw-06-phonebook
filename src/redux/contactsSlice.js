import { createSlice } from '@reduxjs/toolkit';
import defaultContacts from '../data/contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [...defaultContacts],
  },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
