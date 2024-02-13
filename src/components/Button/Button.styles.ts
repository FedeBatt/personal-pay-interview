import { StyleSheet } from "react-native";
import theme from "theme";

export default  StyleSheet.create({
  button: {
    borderRadius: theme.sizes[2],
    paddingVertical: theme.sizes[3],
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: theme.colors.black,
    textTransform: 'uppercase',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
  },
  outlineButton: {
    borderWidth: theme.sizes[0.5],
    borderColor: theme.colors.dark,
    backgroundColor: 'transparent',
  },
  disabledOutlineButton: {
    backgroundColor: theme.colors.primary,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: theme.colors.dark,
  },
  disabledLabel: {
    color: theme.colors.dark,
  },
});
