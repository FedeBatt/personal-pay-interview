import { Image, View } from 'react-native'

import Text from 'components/Text';

import { useCalcTemp } from 'hooks/useCalcTemp.hook';

import styles from './CurrentWeather.styles';
import { assetResolver } from 'utils/assetResolver';
import { IForecast } from 'store/interfaces/currentWeather.interface';

const CurrentWeather = (data: IForecast) => {
  const { main, weather, name } = data;
  const { temp, temp_max, temp_min, feels_like } = useCalcTemp(main);

  return (
    <View style={styles.currentWeatherContainer}>
      <View>
        <Text>Today</Text>
        <Text variant='xl' customStyle={styles.textSpacing}>{`${temp}ºC`}</Text>
        <Text customStyle={styles.textSpacing}>{weather[0].main}</Text>
        <Text variant='lg' customStyle={styles.textSpacing}>{name}</Text>
        <Text>{`${temp_min}º / ${temp_max}ºC  -  feels  ${feels_like}ºC`}</Text>
      </View>
      <Image style={{ width: 125, height: 125 }} source={assetResolver(weather[0].main)} />
    </View>
  )
}

export default CurrentWeather