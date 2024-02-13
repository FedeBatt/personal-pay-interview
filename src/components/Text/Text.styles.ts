import { StyleSheet } from "react-native";
import theme from "theme";

const textBase = {
  color: theme.colors.black,
}

export default StyleSheet.create({
  xl: {
    ...textBase,
    fontSize: theme.sizes[8]
  },
  lg: {
    ...textBase,
    fontSize: theme.sizes[6]
  },
  md: {
    ...textBase,
    fontSize: theme.sizes[4]
  },
  sm: {
    ...textBase,
    fontSize: theme.sizes[3]
  }
});