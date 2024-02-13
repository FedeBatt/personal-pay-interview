import { Image, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Text from 'components/Text'

import Icon from 'components/Icon'
import icons from 'constants/icons'

import { useAppDispatch, useAppSelector } from 'store/store'
import { removeLocation, updateLocation } from 'store/locationListSlice'

import { assetResolver } from 'utils/assetResolver'
import { useCalcTemp } from 'hooks/useCalcTemp.hook'

import { IForecast } from 'store/interfaces/currentWeather.interface'

import styles from './LocationCard.styles'

const LocationCard = (data: IForecast) => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation();
  const isEditable = useAppSelector(state => state.locationList.editMode);

  const { main, name, coord, weather } = data;
  const { temp_max, temp_min, feels_like } = useCalcTemp(main);

  const handleDelete = () => {
    dispatch(removeLocation(name))
  }

  const handleSetCurrentLocation = () => {
    dispatch(updateLocation(data));
    navigation.navigate('Home')
  }

  return (
    <TouchableOpacity
      onPress={handleSetCurrentLocation}
      activeOpacity={0.6}
      style={styles.wrapper}
    >
      <View style={styles.locationContent}>
        <Icon style={{ marginRight: 8 }} icon={icons.mapMarkerAlt} size={22} color="#000" />
        <Text variant='md'>{name}</Text>
      </View>
      {isEditable ?
        <TouchableOpacity onPress={handleDelete} style={styles.locationTemp}>
          <Icon style={{ marginRight: 8 }} icon={icons.trash} size={22} color="red" />
        </TouchableOpacity>
        :
        <View style={styles.locationTemp}>
          <View>
            <Text>ST {feels_like}º</Text>
            <Text>{`${temp_max}º / ${temp_min}º`}</Text>
          </View>
          <Image style={{ width: 50, height: 50 }} source={assetResolver(weather[0].main)} />
        </View>
      }
    </TouchableOpacity>
  )
}

export default LocationCard