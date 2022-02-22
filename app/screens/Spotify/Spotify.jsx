import React, { useState } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";

import Button from "../../components/Button";
import useSearch from "./useSearch.js";

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

export default function Spotify() {
  const [searchTerm, setSearchTerm] = useState("");
  const { tracks } = useSearch();
  if (!Object.keys(tracks).length === 0) {
    console.log(tracks);
  }

  return (
    <View style={styles.butts}>
      <TextInput value={searchTerm} style={styles.input} />
      <Button name="Search" onPress={() => fetchData(searchTerm)} />
      {/* <FlatList
        data={tracks}
        renderItem={({ item }) => {
          console.log(item)
        }}
      /> */}
    </View>
  );
}
