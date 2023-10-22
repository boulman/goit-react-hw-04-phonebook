import React from 'react';

export function Contacts({ contacts, onDelete }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}{' '}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
