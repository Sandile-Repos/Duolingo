import React, { useState } from "react";
import { Text, View, Image, TextInput } from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import question from "./assets/data/oneQuestionWithOption";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption
          image={question.options[0].image}
          text={question.options[0].text}
        />
        <ImageOption
          image={question.options[1].image}
          text={question.options[1].text}
        />
        <ImageOption
          image={question.options[2].image}
          text={question.options[2].text}
        />
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"
          text="cup"
        />
      </View>
    </View>
  );
};

export default App;
