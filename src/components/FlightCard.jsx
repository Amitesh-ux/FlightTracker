const FlightCard = ({ data }) => {
  const saveToWatchlist = () => {
    const existing = JSON.parse(localStorage.getItem('watchlist')) || [];
    const updated = [...existing, data];
    localStorage.setItem('watchlist', JSON.stringify(updated));
    alert("Saved to Watchlist!");
  };

  return (
    <div className="bg-white rounded shadow p-4 mb-4 border border-gray-200">
      <p><strong>From:</strong> {data.departure?.airport} ({data.departure?.iata})</p>
      <p><strong>To:</strong> {data.arrival?.airport} ({data.arrival?.iata})</p>
      <p><strong>Airline:</strong> {data.airline?.name}</p>
      <p><strong>Status:</strong> {data.flight_status}</p>
      <button
        onClick={saveToWatchlist}
        className="mt-3 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Save to Watchlist
      </button>
    </div>
  );
};

export default FlightCard;
