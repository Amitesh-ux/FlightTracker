import { useEffect, useState } from 'react';

const Watchlist = () => {
  const [savedFlights, setSavedFlights] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    setSavedFlights(stored);
  }, []);

  return (
    <div>
      <h2>Saved Flight Deals</h2>
      {savedFlights.length === 0 ? (
        <p>No saved flights yet.</p>
      ) : (
        savedFlights.map((flight, idx) => (
          <div key={idx} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
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