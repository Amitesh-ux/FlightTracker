import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        placeholder="From (IATA code e.g. ORD)"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        required
      />
      <input
        placeholder="To (IATA code e.g. JFK)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
      />
      <button type="submit">Search Flights</button>
    </form>
  );
};

export default SearchForm;
