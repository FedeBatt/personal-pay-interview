import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Text from 'components/Text'
import LocationCard from 'components/LocationCard'
import AddLocation from 'components/AddLocation/AddLocation'
import Loader from 'components/Loader/Loader'

import { useAppSelector } from 'store/store'
import { IForecast } from 'store/interfaces/currentWeather.interface'

const Location = () => {
  const navigation = useNavigation();
  const location = useAppSelector<IForecast | null>(state => state.locationList.currentLocation);
  const locationList = useAppSelector<IForecast[] | null>(state => state.locationList.locations);

  return (
    <View style={{ marginTop: 24, paddingHorizontal: 24, flex: 1 }} >
      {location ?
        <View style={{ flex: 1 }}>
          <Text customStyle={{ marginBottom: 12 }}>Your current location</Text>
          <LocationCard {...location} />
          {locationList && locationList?.length < 5 ?
            <AddLocation onPress={() => navigation.navigate('AddLocation')} />
            :
            <Text customStyle={{color: 'blue', textAlign: 'center'}}>You have reached the limit of locations</Text>
          }
          <FlatList
            data={locationList}
            keyExtractor={(item) => item.dt.toString()}
            renderItem={({ item }) => <LocationCard {...item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        :
        <Loader />
      }
    </View>
  )
}

export default Location