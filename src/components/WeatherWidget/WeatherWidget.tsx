import React from 'react'
import { View, Image } from 'react-native'

import Text from 'components/Text'

import { useCalcTemp } from 'hooks/useCalcTemp.hook'
import { formatDate } from 'utils/dateFormat'
import { assetResolver } from 'utils/assetResolver'
import { ForecastItem } from 'store/interfaces/weatherPerDay.interface'

import styles from './WeatherWidget.styles'

const WeatherWidget = (data: ForecastItem) => {
  const { main, dt_txt, weather} = data;
  console.log("🚀 ~ WeatherWidget ~ weather:", weather)
  const date = formatDate(dt_txt).split(' ')
  const { temp, temp_max, temp_min, feels_like } = useCalcTemp(main)
  
  return (
    <View style={styles.container}>
      <Text>{date[0]}</Text>
      <Text>{`${date[1]} ${date[2]}`}</Text>
      <Text>{temp}ºC</Text>
      <View >
        <Image style={{width: 45, height: 45}} source={assetResolver(weather[0].main)} />
      </View>
    </View>
  )
}

export default WeatherWidget