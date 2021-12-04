import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Navigator from "./navigation";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
