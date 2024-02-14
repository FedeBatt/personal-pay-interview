import { StyleSheet } from "react-native";
import theme from "theme";

export default StyleSheet.create({
  container: {
    elevation: 5,
    width: 145,
    height: 145,
    backgroundColor: theme.colors.background,
    borderRadius: theme.sizes[4],
    justifyContent: 'center',
    alignItems: 'center'
  }
})