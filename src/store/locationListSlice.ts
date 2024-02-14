import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DeviceLocationState,
  IForecast,
} from "./interfaces/currentWeather.interface";
import {
  ForecastItem,
  IForecastList,
} from "./interfaces/weatherPerDay.interface";

interface LocationState {
  weatherList: ForecastItem[] | null;
  currentLocation: IForecast | null;
  locations: IForecast[];
  editMode: boolean;
  deviceLocationState: DeviceLocationState;
}

const initialState: LocationState = {
  weatherList: null,
  currentLocation: null,
  locations: [],
  editMode: false,
  deviceLocationState: {
    lat: null,
    lon: null,
  },
};

const locationListSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setCurrentDeviceLocation: (
      state,
      action: PayloadAction<{
        latitude: string | null;
        longitude: string | null;
      }>
    ) => {
      state.deviceLocationState.lat = action.payload.latitude;
      state.deviceLocationState.lon = action.payload.longitude;
    },
    updateLocation: (state, action: PayloadAction<IForecast>) => {
      if (state.currentLocation) {
        state.locations.push(state.currentLocation);
      }

      state.currentLocation = action.payload;

      state.locations = state.locations.filter(
        (location) => location.name !== action.payload.name
      );
    },
    setWeatherPerDayList: (
      state,
      action: PayloadAction<ForecastItem[] | null>
    ) => {
      state.weatherList = action.payload;
    },
    addLocation: (state, action: PayloadAction<IForecast>) => {
      state.locations.push(action.payload);
    },
    removeLocation: (state, action: PayloadAction<string | undefined>) => {
      state.locations = state.locations.filter(
        (location) => location.name !== action.payload
      );
    },
    toggleEditMode: (state) => {
      state.editMode = !state.editMode;
    },
  },
});

export const {
  addLocation,
  removeLocation,
  toggleEditMode,
  setCurrentDeviceLocation,
  updateLocation,
  setWeatherPerDayList,
} = locationListSlice.actions;
export default locationListSlice.reducer;
