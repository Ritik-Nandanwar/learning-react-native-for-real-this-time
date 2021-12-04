import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
export default function About({ navigation }) {
  return (
    <View>
      <Text>This a about page</Text>
      <Button title="All Persons" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({});
