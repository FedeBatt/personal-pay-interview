import React, { useEffect } from "react";
import { Alert, FlatList, View } from "react-native";
import Geolocation from '@react-native-community/geolocation';

import CurrentWeather from 'components/CurrentWeather';
import Loader from "components/Loader/Loader";
import WeatherWidget from "components/WeatherWidget";

import { useAppDispatch, useAppSelector } from "store/store";

import { setCurrentDeviceLocation, setWeatherPerDayList, updateLocation } from "store/locationListSlice";

import { getWeatherByCityService, getWeatherPerDayService } from "services/weatherService"; 

import { IForecastList } from "store/interfaces/weatherPerDay.interface";
import { DeviceLocationState, IForecast } from "store/interfaces/currentWeather.interface";

import styles from './Home.styles'

const Home = () => {
  const dispatch = useAppDispatch();
  const cityForecast = useAppSelector<IForecast | null>(state => state.locationList.currentLocation);
  const forecastList = useAppSelector<IForecastList | null>(state => state.locationList.weatherList);
  const location = useAppSelector<DeviceLocationState | null>(state => state.locationList.deviceLocationState)

  const getCurrentPosition = async () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        dispatch(setCurrentDeviceLocation({
          latitude: pos.coords.latitude.toString(),
          longitude: pos.coords.longitude.toString()
        }));
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
  };

  const handleFetch = async () => {
    if (location?.lat && location?.lon) {
      const resWeatherByCity = await getWeatherByCityService({latitude: location.lat, longitude: location.lon})
      const resWeatherPerDay = await getWeatherPerDayService({latitude: location.lat, longitude: location.lon})
      dispatch(updateLocation(resWeatherByCity))
      dispatch(setWeatherPerDayList(resWeatherPerDay));
    }
  }

  useEffect(() => {
    if (!location?.lat && !location?.lon) {
      getCurrentPosition()
    }
  }, [])

  useEffect(() => {
    handleFetch()
  }, [location])

  return (
    <View style={{ flex: 1 }}>
      {cityForecast && forecastList ?
        <View style={styles.mainWrapper}>
          <CurrentWeather {...cityForecast} />
          <FlatList
            data={forecastList}
            keyExtractor={(item) => item.dt.toString()}
            renderItem={({ item }) => <WeatherWidget {...item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.flatList}
          />
        </View>
        :
        <Loader />
      }
    </View>
  );
};

export default Home;
