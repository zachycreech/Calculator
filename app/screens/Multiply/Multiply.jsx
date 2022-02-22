import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../../components/Button";

const styles = StyleSheet.create({
  butts: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Multiply() {
  function onPress() {
    console.log("hey");
  }

  return (
    <View style={styles.butts}>
      <Text>Hey im the add screen</Text>
      <Button onPress={onPress} name={"Multiply"} size="large" />
    </View>
  );
}
