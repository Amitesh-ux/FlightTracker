import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Flight Deal Tracker</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/watchlist" className="hover:underline">Watchlist</Link>
        </div>
      </nav>

      <main className="p-6 max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;