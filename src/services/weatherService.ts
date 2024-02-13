import axios from "axios";
import { ForecastItem } from "store/interfaces/weatherPerDay.interface";

const API_KEY = "71b7b7db72d11ddf77d6f96c48dd9832"; // Reemplaza 'your_api_key' con tu clave API de OpenWeatherMap

interface WeatherServiceParams {
  latitude: string | null;
  longitude: string | null;
}

export const getWeatherByCityService = async ({ latitude, longitude }: WeatherServiceParams) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}


export const getWeatherPerDayService = async ({ latitude, longitude }: WeatherServiceParams) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const response = await axios.get(apiUrl);
    const uniqueDates: Set<string> = new Set();
    const filteredList = response.data.list.filter((forecast: ForecastItem) => {
      const dateObj = new Date(forecast.dt * 1000);
      const dateStr = dateObj.toISOString().split("T")[0]; // Obtener solo la fecha, sin la hora

      if (!uniqueDates.has(dateStr)) {
        uniqueDates.add(dateStr);
        return true;
      }

      return false;
    });

    const result = filteredList.slice(0, 6);

    return result;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};


