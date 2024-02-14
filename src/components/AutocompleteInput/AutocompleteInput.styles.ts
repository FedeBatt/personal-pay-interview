import { StyleSheet } from "react-native";
import theme from "theme";

export default StyleSheet.create({
  input: { 
    backgroundColor: theme.colors.background, 
    borderRadius: theme.sizes[4],
    paddingHorizontal: theme.sizes[4],
    paddingVertical: theme.sizes[3],
    fontSize: theme.sizes[4],
    color: theme.colors.dark,
    elevation: 8
  },
  placeholder: {
    color: theme.colors.dark
  },
  searchButton: {
    width: 75,
    height: 55,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});