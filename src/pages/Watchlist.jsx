import { useEffect, useState } from 'react';

const Watchlist = () => {
  const [savedFlights, setSavedFlights] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    setSavedFlights(stored);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Saved Flight Deals</h2>
      {savedFlights.length === 0 ? (
        <p className="text-gray-600">No saved flights yet.</p>
      ) : (
        savedFlights.map((flight, idx) => (
          <div key={idx} className="bg-white shadow p-4 rounded mb-4 border">
            <p><strong>From:</strong> {flight.departure?.airport} ({flight.departure?.iata})</p>
            <p><strong>To:</strong> {flight.arrival?.airport} ({flight.arrival?.iata})</p>
            <p><strong>Airline:</strong> {flight.airline?.name}</p>
            <p><strong>Status:</strong> {flight.flight_status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Watchlist;
