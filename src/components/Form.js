import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ search, setSearch, setDidConsult }) => {
  const [error, setError] = useState(false);

  const { city, country } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validate
    if (city.trim() === '' || country.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setDidConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <p className="red darken-4 error">All fields are required</p> : null}
      <div className="input-field col s12">
        <select name="country" id="country" value={country} onChange={handleChange}>
          <option value="">--Select a country--</option>
          <option value="US">United States</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Peru</option>
        </select>
        <label htmlFor="country">Country:</label>
      </div>
      <div className="input-field col s12">
        <label htmlFor="city">City:</label>
        <input type="text" name="city" id="city" value={city} onChange={handleChange} />
      </div>
      <div className="input-field col s12">
        <button type="submit" className="waves-effect waves-light btn-large btn-block blue accent-4">
          Search Weather
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setDidConsult: PropTypes.func.isRequired,
};

export default Form;
