import { ForecastItem } from "./weatherPerDay.interface";

interface CoordForecast {
  lon: string;
  lat: string;
}

interface WeatherItemForecast {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMainForecast {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface WindForecast {
  speed: number;
  deg: number;
  gust: number;
}

interface RainForecast {
  "1h": number;
}

interface CloudsForecast {
  all: number;
}

interface SysForecast {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IForecast {
  coord: CoordForecast;
  weather: WeatherItemForecast[];
  base: string;
  main: IMainForecast;
  visibility: number;
  wind: WindForecast;
  rain: RainForecast;
  clouds: CloudsForecast;
  dt: number;
  sys: SysForecast;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}


export interface IForecastList {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
}

export interface DeviceLocationState {
  lat: string | null;
  lon: string | null;
}