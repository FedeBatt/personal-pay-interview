import { StyleSheet } from "react-native";

import theme from "theme";

export default StyleSheet.create({
  container: {
    paddingHorizontal: theme.sizes[6],
    backgroundColor: 'blue',
  },
  mainWrapper: {
    marginTop: theme.sizes[4],
    paddingHorizontal: theme.sizes[6]
  },
  flatList: {
    marginVertical: theme.sizes[6]
  }
})