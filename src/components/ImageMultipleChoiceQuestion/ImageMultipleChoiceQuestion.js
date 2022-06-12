import { Text, View, Alert } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";

import ImageOption from "../ImageOption";
import Button from "../Button";
import styles from "./styles";

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert(selected.text, "is correct");
      //move to next question
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  };
  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

// ImageMultipleChoiceQuestion.defaultProps = {
//   text: "Default",
//   isSelected: false,
//   onPress: () => {},
// };

export default ImageMultipleChoiceQuestion;