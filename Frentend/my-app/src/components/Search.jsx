// SearchInput.jsx
import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value); // pass to parent (Navbar → App → PostItems)
  };

  return (
    <input
      type="text"
      placeholder="Search for items..."
      value={input}
      onChange={handleChange}
      className="input input-bordered w-full max-w-xs"
    />
  );
};

export default SearchInput;
