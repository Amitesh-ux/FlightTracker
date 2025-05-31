import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-start sm:items-end mb-6"
    >
      <div className="flex flex-col">
        <label className="text-sm text-gray-600">From (IATA code)</label>
        <input
          className="px-3 py-2 border rounded w-40"
          placeholder="e.g. ORD"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600">To (IATA code)</label>
        <input
          className="px-3 py-2 border rounded w-40"
          placeholder="e.g. JFK"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Search Flights
      </button>
    </form>
  );
};

export default SearchForm;
