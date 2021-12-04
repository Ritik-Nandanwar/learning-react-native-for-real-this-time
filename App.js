import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import NavCol from "./navigationColorGen";
import Navigator from "./navigationPerson";

export default function App() {
  // return <Navigator />;
  return <NavCol />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
