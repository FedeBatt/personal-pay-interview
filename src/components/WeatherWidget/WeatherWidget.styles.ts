import { StyleSheet } from "react-native";
import theme from "theme";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.sizes[4],
    padding: theme.sizes[2],
    alignItems: "center",
    width: 120,
    marginRight: 8,
  },
});
