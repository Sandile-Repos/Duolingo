import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const WordOption = ({ text, onPress, isSelected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgrey" : "white" },
      ]}
    >
      {!isSelected && (
        <Text
          style={[styles.text, { color: isSelected ? "lightgrey" : "black" }]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default WordOption;

const styles = StyleSheet.create({
  root: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 15,
    margin: 10,
  },
  text: {},
});
