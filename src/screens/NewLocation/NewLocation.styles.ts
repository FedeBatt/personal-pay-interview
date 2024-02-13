import { StyleSheet } from "react-native";
import theme from "theme";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
  mainContainer: { 
    flex: 1, 
    paddingHorizontal: 24 
  },
  locationListContainer: {
    marginTop: 16,
  },
  locationSelector: {
    paddingVertical: theme.sizes[3],
    paddingHorizontal: theme.sizes[4],
    marginVertical: theme.sizes[2],
    borderRadius: theme.sizes[3],
    backgroundColor: theme.colors.background,
    elevation: 5
  },
});
