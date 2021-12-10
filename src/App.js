import React, { Fragment, useEffect, useState } from 'react';

//Components
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const [didConsult, setDidConsult] = useState(false);
  const { city, country } = search;

  useEffect(() => {
    const getWeather = async (city, country) => {
      if (didConsult) {
        const key = process.env.REACT_APP_API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
      }
    };
    getWeather(city, country);
  }, [city, country, didConsult]);

  return (
    <Fragment>
      <Header title="Weather React" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setDidConsult={setDidConsult} />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
