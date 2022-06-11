import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import icon from "./assets/icon.png";
import styles from "./App.styles";

const App = () => {
  const [lines, setLines] = useState(false);
  const changeLine = () => {
    setLines(!lines);
  };

  const status = "error";
  return (
    <View style={styles.root}>
      <Text
        numberOfLines={lines ? 2 : null}
        onPress={changeLine}
        ellipsizeMode="tail"
        style={[
          styles.text,
          styles.blue,
          { color: status === "error" ? "red" : "green" },
        ]}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </Text>
      <Image
        // source={icon}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
        // style={{ width: 50, height: 100 }}
        // resizeMode="contain"
        style={{ width: 550, height: 500 }}
        resizeMode="cover"
      />
      <KeyboardAvoidingView behavior="padding">
        <TextInput placeholder="What's your name" />
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;
