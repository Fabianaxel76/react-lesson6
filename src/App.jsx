import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const items = [
    'Apple',
    'Banana',
    'Grapes',
    'Orange',
    'Pineapple',
    'Mango',
    'Watermelon'
  ];

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Search App</h1>

      {}
      <Search onSearch={handleSearch} value={searchTerm} />

      <p>
        <strong>Searching for:</strong> {searchTerm || <em>(nothing)</em>}
      </p>

      {}
      <h2>Results</h2>
      <ul>
        {filtered.length > 0 ? (
          filtered.map((item) => <li key={item}>{item}</li>)
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
}

function Search(props) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={props.value}
        onChange={props.onSearch}
        placeholder="Type to search..."
      />
    </div>
  );
}

export default App;