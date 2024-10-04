import React from 'react';

const StarshipDetails = ({ starship, onBack }) => {
  return (
    <div>
      <h1>{starship.name}</h1>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Yolcu Sayısı:</strong> {starship.passengers}</p>
      <p><strong>Max Hız (Atmosfer):</strong> {starship.max_atmosphering_speed}</p>
      <p><strong>Üretici:</strong> {starship.manufacturer}</p>
      <p><strong>Mürettebat:</strong> {starship.crew}</p>
      <p><strong>Kargo Kapasitesi:</strong> {starship.cargo_capacity}</p>
      <button onClick={onBack}>Geri</button>
    </div>
  );
};

export default StarshipDetails;
