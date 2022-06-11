import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    paddingTop: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },

  optionsContainer: {
    width: "100%",
    flex: 1,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between", // works with flexWrap
  },

  optionContainer: {
    //border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,

    //size
    width: "48%",
    height: "48%",

    //spacing
    padding: 10,

    alignItems: "center",
  },

  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {},
});

export default styles;
