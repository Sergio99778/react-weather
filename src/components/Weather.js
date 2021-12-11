import React from 'react';

const Weather = ({ result }) => {
  const { name, main } = result;
  if (!name) return null;

  const toCelcius = (kelvin) => parseFloat(kelvin - 273.15).toFixed(2);

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather in {name} is :</h2>
        <p className="temperatura">
          {' '}
          {toCelcius(main.temp)}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperature min:
          {toCelcius(main.temp_min)}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperature max:
          {toCelcius(main.temp_max)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
