import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { fetchCurrentWeather, fetchFiveDayForecast } from "../services/weatherService";
import { cities } from "../data/cities"; 

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const handleFetchData = async () => {
    if (selectedCity) {
      try {
        const currentWeather = await fetchCurrentWeather(selectedCity.lat, selectedCity.lon);
        const fiveDayForecast = await fetchFiveDayForecast(selectedCity.lat, selectedCity.lon);

        console.log("Current Weather:", currentWeather);
        console.log("Five Day Forecast:", fiveDayForecast);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  return (
    <div>
      <h2>Choose a City</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.name}>
            <button onClick={() => handleCitySelect(city)}>{city.name}</button>
          </li>
        ))}
      </ul>
      {selectedCity ? (
        <YMaps>
          <div>
            <Map
              defaultState={{
                center: [selectedCity.lon, selectedCity.lat],
                zoom: 10,
              }}
            >
              <Placemark geometry={[selectedCity.lon, selectedCity.lat]} />
            </Map>
          </div>
        </YMaps>
      ) : (
        <p>Please select a city</p>
      )}

      <button onClick={handleFetchData}>Fetch Weather Data</button>
    </div>
  );
};

export default CitySelector;