import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState(''); // Holds the product name input
  const [results, setResults] = useState([]); // Holds the price comparison results

  const handleSearch = async () => {
    // Fetch the data from the backend (your Node.js server)
    const response = await fetch(`http://localhost:5000/api/compare?query=${query}`);
    const data = await response.json();
    setResults(data); // Set the comparison results
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Price Comparison App</h1>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="results-container">
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <p>{result.store}: {result.price}</p>
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  Go to store
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

