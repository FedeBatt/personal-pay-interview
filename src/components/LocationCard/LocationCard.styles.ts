import { StyleSheet } from "react-native";
import theme from "theme";

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.sizes[4],
    borderRadius: theme.sizes[4],
    backgroundColor: theme.colors.background,
    marginVertical: theme.sizes[2],
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTemp: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
