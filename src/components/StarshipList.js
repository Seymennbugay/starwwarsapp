import React, { useState, useEffect } from 'react';

const StarshipList = ({ onSelectShip }) => {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(res => res.json())
      .then(data => {
        setStarships(data.results);
        setNextPage(data.next);
      });
  }, []);

  const loadMore = () => {
    if (nextPage) {
      fetch(nextPage)
        .then(res => res.json())
        .then(data => {
          setStarships(prevShips => [...prevShips, ...data.results]);
          setNextPage(data.next);
        });
    }
  };

  return (
    <div>
      <h1>Starships</h1>
      <ul>
        {starships.map(ship => (
          <li key={ship.name} onClick={() => onSelectShip(ship)}>
            {ship.name} - {ship.model}
          </li>
        ))}
      </ul>
      {nextPage && <button onClick={loadMore}>Daha Fazla</button>}
    </div>
  );
};

export default StarshipList;
