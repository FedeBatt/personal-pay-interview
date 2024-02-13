export const assetResolver = (weather: string) => {
  const assetName = weather;
  switch (assetName) {
    case 'Clouds':
      return require('../assets/cloud.png');
    case 'Rain':
      return require('../assets/rain.png');
    case 'Snow':
      return require('../assets/snow.png');
    default:
      return require('../assets/clear.png');
  }
}