const Country = ({ countries, isChecked, setIsChecked, addVisitedCountry }) => {
  const handleVisitedCountry = (visitCountry) => {
    addVisitedCountry(visitCountry);
    setIsChecked(!isChecked);
  };

  return (
    <>
      <h2>Countries List</h2>

      <ul>
        {countries ? (
          countries.map((country, index) => (
            <li>
              <input
                type="checkbox"
                onChange={() => handleVisitedCountry(country.name.common)}
              />
              <label key={index}>{country.name.common}</label>
            </li>
          ))
        ) : (
          <p>Loading Countries List</p>
        )}
      </ul>
    </>
  );
};

export default Country;
