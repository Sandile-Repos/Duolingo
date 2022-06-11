import React from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const ImageOption = ({ image, text }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ImageOption.defaultProps = {
  text: "Default",
};

export default ImageOption;
