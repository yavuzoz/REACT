import React, { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(response => setCountries(response));
  }, []);
  return (
    <div className="App">
      {countries.map(country => {
        return <div key={country.name}>
          <h2>{country.name}</h2>
          <h4>{country.capital}</h4>
          <p><img src={country.flag} alt={country.name} style={{ width: '100px' }} /></p>
        </div>;
      })}
    </div>

  );
}

