import { StyleSheet } from "react-native";

import theme from "theme";

export default StyleSheet.create({
  container: {
    paddingHorizontal: theme.sizes[6],
    backgroundColor: "blue",
  },
  mainWrapper: {
    marginTop: theme.sizes[4],
    paddingHorizontal: theme.sizes[6],
    paddingVertical: 24
  },
  flatList: {
    marginVertical: theme.sizes[6],
  },
  extraInfoWrapper: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
