import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const s = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 25,
  },
  contain: {
    position: "relative",
  },
  input: {
    backgroundColor: theme.WHITE,
    borderRadius: 10,
    paddingHorizontal: 45,
    height: 45,
  },
  icon: {
    position: "absolute",
    top: '25%',
    left: 10,
    color: theme.TEXT
  },
});
