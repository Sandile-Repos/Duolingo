import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../Button";
import WordOption from "../WordOption/WordOption";
import styles from "./styles";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const onButtonPress = () => {
    // if (selectedOptions === question.correct) {
    //   onCorrect();
    // } else {
    //   onWrong();
    // }
    // setSelectedOptions(null);
  };
  const addOptionToSelected = (option) => {
    //limit number of selected options
    const numberOfBlanks = question.parts.filter((part) => part.isBlank).length;
    if (numberOfBlanks > selectedOptions.length) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const removeOptionFromSelected = (option) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOption) => selectedOption === option)
    );
  };

  let blankIndex = -1;

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
        {question.parts.map((part) => {
          if (part.isBlank) {
            blankIndex += 1;
            return (
              <View style={styles.blank}>
                {selectedOptions.length > blankIndex && (
                  <WordOption
                    text={selectedOptions[blankIndex]}
                    onPress={() =>
                      removeOptionFromSelected(selectedOptions[blankIndex])
                    }
                  />
                )}
              </View>
            );
          } else {
            return <Text style={styles.text}>{part.text}</Text>;
          }
        })}
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            text={option}
            isSelected={selectedOptions.includes(option)}
            onPress={() => addOptionToSelected(option)}
          />
        ))}
      </View>
      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={!selectedOptions.length}
      />
    </>
  );
};

export default FillInTheBlank;
