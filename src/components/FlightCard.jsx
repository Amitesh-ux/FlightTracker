const FlightCard = ({ data }) => {
  const saveToWatchlist = () => {
    const existing = JSON.parse(localStorage.getItem('watchlist')) || [];
    const updated = [...existing, data];
    localStorage.setItem('watchlist', JSON.stringify(updated));
    alert("Saved to Watchlist!");
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <p><strong>From:</strong> {data.departure?.airport} ({data.departure?.iata})</p>
      <p><strong>To:</strong> {data.arrival?.airport} ({data.arrival?.iata})</p>
      <p><strong>Airline:</strong> {data.airline?.name}</p>
      <p><strong>Status:</strong> {data.flight_status}</p>
      <button onClick={saveToWatchlist}>Save to Watchlist</button>
    </div>
  );
};

export default FlightCard;