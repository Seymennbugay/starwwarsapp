import React, { useState } from 'react';
import StarshipList from './components/StarshipList';
import StarshipDetails from './components/StarshipDetails';
import SearchBar from './components/SearchBar';

function App() {
  const [selectedShip, setSelectedShip] = useState(null);
  const [filteredShips, setFilteredShips] = useState([]);

  const handleSearch = (results) => {
    setFilteredShips(results);
  };

  const handleBack = () => {
    setSelectedShip(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {!selectedShip ? (
        <StarshipList onSelectShip={setSelectedShip} />
      ) : (
        <StarshipDetails starship={selectedShip} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
