import { Label } from './Filter.styled';
import React from 'react';

export function Filter({ onChange }) {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="search"
        placeholder="Enter search"
        onChange={onChange}
      />
    </Label>
  );
}
