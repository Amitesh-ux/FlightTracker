import { useState } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import FlightCard from '../components/FlightCard';

const Home = () => {
  const [flights, setFlights] = useState([]);

  const searchFlights = async ({ from, to }) => {
    try {
      const response = await axios.get('http://api.aviationstack.com/v1/flights', {
        params: {
          access_key: '1c98144a71ef2b07e0168a35d29cf9ef',
          dep_iata: from,
          arr_iata: to
        }
      });
      console.log(response.data.data);
      setFlights(response.data.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <h1>Flight Deal Tracker</h1>
      <SearchForm onSearch={searchFlights} />
      {flights.length === 0 ? (
        <p>No flights found yet. Try searching!</p>
      ) : (
        flights.map((flight, idx) => (
          <FlightCard key={idx} data={flight} />
        ))
      )}
    </div>
  );
};

export default Home;
