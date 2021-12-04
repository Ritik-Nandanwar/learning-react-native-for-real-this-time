import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import PersonDetails from "./PersonDetails";
const people = [
  {
    name: "Name 1",
    age: 21,
  },
  {
    name: "Name 2",
    age: 22,
  },
  {
    name: "Name 3",
    age: 33,
  },
  {
    name: "Name 4",
    age: 25,
  },
  {
    name: "Name 5",
    age: 254,
  },
  {
    name: "Name 6",
    age: 245,
  },
  {
    name: "Name 7",
    age: 2425,
  },
  {
    name: "Name 8",
    age: 2325,
  },
];
export default function Persons({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <PersonDetails
            bestbud={(Math.random() * 1000).toString()}
            title={item}
          />
        )}
        keyExtractor={(item) => item.age.toString()}
      />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
