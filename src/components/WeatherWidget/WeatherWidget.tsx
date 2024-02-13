import Text from 'components/Text'
import { useCalcTemp } from 'hooks/useCalcTemp.hook'
import React from 'react'
import { View, Image } from 'react-native'
import { formatDate } from 'utils/dateFormat'

import styles from './WeatherWidget.styles'
import { ForecastItem } from 'store/interfaces/weatherPerDay.interface'

const WeatherWidget = (data: ForecastItem) => {
  const { main, dt_txt} = data;
  const date = formatDate(dt_txt).split(' ')
  const { temp, temp_max, temp_min, feels_like } = useCalcTemp(main)
  
  return (
    <View style={styles.container}>
      <Text>{date[0]}</Text>
      <Text>{`${date[1]} ${date[2]}`}</Text>
      <Text>{temp}ºC</Text>
      <View >
        <Image style={{width: 45, height: 45}} source={require('../../assets/cloud.png')} />
      </View>
    </View>
  )
}

export default WeatherWidget