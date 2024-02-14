import { useEffect, useState } from 'react';
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import Text from 'components/Text';
import AutocompleteInput from 'components/AutocompleteInput';

import axios from 'axios';

import styles from './NewLocation.styles';
import Loader from 'components/Loader/Loader';
import { useAppDispatch } from 'store/store';
import { addLocation } from 'store/locationListSlice';
import { useNavigation } from '@react-navigation/native';
import { IForecast } from 'store/interfaces/currentWeather.interface';
import { getWeatherByCityService } from 'services/weatherService';

const getPlaces = async (place: string) => {
  const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=71b7b7db72d11ddf77d6f96c48dd9832`);
  const result = res.data;
  return result;
}

const NewLocation = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation()
  const [places, setPlaces] = useState<IForecast[] | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSearch = () => {
    try {
      setIsLoading(true);
      getPlaces(inputValue)
        .then(places => setPlaces(places));
    } catch (e) {
    } finally {
      setInputValue('')
      setIsLoading(false);
    }
  }

  const addNewLocation = async (place: any) => {
    try {
      const { lon, lat } = place;
      const res = await getWeatherByCityService({ latitude: lat, longitude: lon })
      dispatch(addLocation(res))
      navigation.goBack();
    } catch (err) {
      console.log("🚀 ~ addNewLocation ~ err:", err)
    }
  }

  return (
    <TouchableWithoutFeedback style={styles.wrapper} onPress={dismissKeyboard}>
      <View style={styles.mainContainer}>
        <Text customStyle={{ marginVertical: 24 }}>Add other location</Text>
        <AutocompleteInput
          disabled={inputValue === ''}
          value={inputValue}
          onChangeText={text => setInputValue(text)}
          onPress={handleSearch}
          onSubmitEditing={handleSearch}
        />
        <View style={styles.locationListContainer}>
          {places && places.map((place: any, index) =>
            <TouchableOpacity key={index} onPress={() => addNewLocation(place)} style={styles.locationSelector}>
              <View style={{ flexDirection: 'row' }} >
                <Text>{place.name}{', '}</Text>
                <Text>{place.state}{', '}</Text>
                <Text>{place.country}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        {isLoading && <Loader />}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewLocation