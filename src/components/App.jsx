import React, { useEffect, useState } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('Contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, phone }) => {
    if (contacts.some(con => con.name === name)) {
      alert('Contact with this name already exist');
      return;
    }
    if (contacts.some(con => con.phone === phone)) {
      alert('Contact with this phone already exist');
      return;
    }
    setContacts(prev => [
      ...prev,
      {
        name,
        phone,
        id: nanoid(),
      },
    ]);
  };

  const deleteContact = deleteId => {
    setContacts(prev => prev.filter(({ id }) => id !== deleteId));
  };

  const handleInput = e => {
    const newInput = e.target.value.trim().toLowerCase();
    setFilter(newInput);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <AddContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter onChange={handleInput} />
          <Contacts contacts={getFilteredContacts()} onDelete={deleteContact} />
        </>
      ) : (
        <p>No contacts yet</p>
      )}
    </Container>
  );
}
