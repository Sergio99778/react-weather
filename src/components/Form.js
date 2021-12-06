import React, { useState } from 'react';

const Form = () => {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const { city, country } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
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
    </form>
  );
};

export default Form;
