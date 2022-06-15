import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    height: 65,
  },
  text: {
    alignSelf: "flex-end",
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    width: 100,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center", // use alignContent to center instead of justify/content when you have fleWrap
  },
});
export default styles;
