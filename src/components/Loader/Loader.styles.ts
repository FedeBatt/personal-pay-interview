import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    width: width,
  }
})