import { StyleSheet } from "react-native";
import theme from "theme";

export default StyleSheet.create({
  currentWeatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textSpacing: {
    marginBottom: theme.sizes[2],
    textTransform: 'capitalize',
  }
})