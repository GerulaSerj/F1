import axios from "axios";

const API_KEY = "20f1b08710716113546a29d7c6425f04"; 

const fetchCurrentWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchFiveDayForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchCurrentWeather, fetchFiveDayForecast };