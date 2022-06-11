import React, { useState } from "react";
import { Text, View, Image, TextInput } from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption />
        <ImageOption />
        <ImageOption />
        <ImageOption />
      </View>
    </View>
  );
};

export default App;
