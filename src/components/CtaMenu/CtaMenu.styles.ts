import { StyleSheet } from "react-native";
import theme from "theme";

export default StyleSheet.create({
  container: {  
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backdrop: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    position: 'absolute',
    alignItems: 'flex-start',
    borderRadius: theme.sizes[3],
    width: 150,
    paddingVertical: theme.sizes[2],
    paddingHorizontal: theme.sizes[6],
    backgroundColor: theme.colors.background,
    right: theme.sizes[6],
    top: 2,
  }
})