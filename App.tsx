import React, { useEffect } from 'react';
import { PermissionsAndroid, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Navigation from 'navigation';
import { store } from 'store/store';

function App(): React.JSX.Element {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "WeatherApp",
          message: "Allow WeatherApp to access this device's location",
          buttonNeutral: 'Only this time',
          buttonNegative: "Don't allow",
          buttonPositive: "While using the app",
        },
      );
      
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
