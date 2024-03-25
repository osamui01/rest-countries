import { useState, useEffect } from "react";
import Country from "../components/Country";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [visitCountries, setVisitedCountries] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const addVisitedCountry = (visitCountry) => {
    if (!visitCountries.includes(visitCountry)) {
      setVisitedCountries([...visitCountries, visitCountry]);
    }
  };

  return (
    <>
      <section className="countries-list">
        <div className="all-countries">
          <Country
            countries={countries}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            addVisitedCountry={addVisitedCountry}
          />
        </div>

        <div className="visited countries">
          <h2>Visited Countries</h2>
          <ul>
            {visitCountries.map((visitCountry, index) => (
              <li key={index}>{visitCountry}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CountryContainer;
