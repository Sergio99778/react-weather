import React, { Fragment, useEffect, useState } from 'react';

//Components
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const [didConsult, setDidConsult] = useState(false);
  const [result, setResult] = useState({});
  const { city, country } = search;
  const [error, setError] = useState(false);

  useEffect(() => {
    const getWeather = async (city, country) => {
      if (didConsult) {
        const key = process.env.REACT_APP_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`;
        const res = await fetch(url);
        const data = await res.json();
        setResult(data);

        //Consult ended
        setDidConsult(false);

        //Checks if error exist
        if (data.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    getWeather(city, country);
  }, [city, country, didConsult]);

  let component;
  if (error) {
    component = <Error message="Wrong fields" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title="Weather React" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setDidConsult={setDidConsult} />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
