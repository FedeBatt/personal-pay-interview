import { useMemo } from "react";
import { IMainForecast } from "store/currentWeatherSlice";

export const useCalcTemp = (main: IMainForecast) => {
  const { temp, temp_min, temp_max, feels_like } = main;
  const tempInKelvin = 273.15;
  const calculatedTemp = useMemo(() => {
    return {
      temp: Math.round(temp - tempInKelvin),
      temp_min: Math.round(temp_min - tempInKelvin),
      temp_max: Math.round(temp_max - tempInKelvin),
      feels_like: Math.round(feels_like - tempInKelvin),
    };
  }, [temp, temp_min, temp_max, feels_like]);

  return calculatedTemp;
};
