import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";

import Button from "../../components/Button";

const styles = StyleSheet.create({
  butts: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});

export default function Add() {
  const [isLoading, setLoading] = useState(true);
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  function onPress() {
    let totals = firstNumber + secondNumber;
    setTotal(totals);
  }

  if (isLoading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <View style={styles.butts}>
      <TextInput
        style={styles.input}
        value={firstNumber}
        onChangeText={(text) => setFirstNumber(parseInt(text))}
      />
      <TextInput
        style={styles.input}
        value={secondNumber}
        onChangeText={(text) => setSecondNumber(parseInt(text))}
      />
      <Text>{total}</Text>
      <Button onPress={onPress} name={"Addem"} />
    </View>
  );
}
