import React, { useEffect } from "react";
import { Alert, FlatList, ScrollView, View } from "react-native";
import Geolocation from '@react-native-community/geolocation';

import CurrentWeather from 'components/CurrentWeather';
import Loader from "components/Loader/Loader";
import WeatherWidget from "components/WeatherWidget";

import { useAppDispatch, useAppSelector } from "store/store";

import { setCurrentDeviceLocation, setWeatherPerDayList, updateLocation } from "store/locationListSlice";

import { getWeatherByCityService, getWeatherPerDayService } from "services/weatherService";

import { ForecastItem, IForecastList } from "store/interfaces/weatherPerDay.interface";
import { DeviceLocationState, IForecast } from "store/interfaces/currentWeather.interface";

import styles from './Home.styles'
import Icon from "components/Icon";
import icons from "constants/icons";
import theme from "theme";
import Text from "components/Text";
import WidgetExtraInfo from "components/WidgetExtraInfo";
import { unixFormat } from "utils/dateFormat";

const Home = () => {
  const dispatch = useAppDispatch();
  const cityForecast = useAppSelector<IForecast | null>(state => state.locationList.currentLocation);
  const forecastList = useAppSelector<ForecastItem[] | null>(state => state.locationList.weatherList);
  const location = useAppSelector<DeviceLocationState | null>(state => state.locationList.deviceLocationState)

  const windToKmh = cityForecast && cityForecast?.wind?.speed * 3.6 

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
      const resWeatherByCity = await getWeatherByCityService({ latitude: location.lat, longitude: location.lon })
      const resWeatherPerDay = await getWeatherPerDayService({ latitude: location.lat, longitude: location.lon })
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
    <ScrollView style={{ flex: 1 }}>
      {cityForecast && forecastList ?
        <View style={styles.mainWrapper}>
          <CurrentWeather {...cityForecast} />
          <FlatList
            data={forecastList}
            keyExtractor={(item) => item.dt.toString()}
            renderItem={({ item }) => <WeatherWidget {...item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
          <View style={styles.extraInfoWrapper}>
            <WidgetExtraInfo
              colorIcon={theme.colors.primary}
              icon={icons.tint}
              title="Humidity"
              info={`${cityForecast.main.humidity.toString()}%`}
            />
            <WidgetExtraInfo
              colorIcon={theme.colors.dark}
              icon={icons.wind}
              title="Wind"
              info={`${windToKmh?.toFixed()} km/h`}
            />
            <WidgetExtraInfo
              colorIcon={theme.colors.warning}
              icon={icons.sun}
              title="Sunrise"
              info={unixFormat(cityForecast.sys.sunrise.toString())}
            />
            <WidgetExtraInfo
              colorIcon={theme.colors.dark}
              icon={icons.moon}
              title="Sunset"
              info={unixFormat(cityForecast.sys.sunset.toString())}
            />
          </View>
        </View>
        :
        <Loader />
      }
    </ScrollView>
  );
};

export default Home;
