import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProgressBar from "../ProgressBar";

const Header = ({ progress }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
});
