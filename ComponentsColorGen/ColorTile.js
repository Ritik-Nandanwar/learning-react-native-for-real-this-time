import { StyleSheet, Text, View } from "react-native";
import React from "react";
const ColorTile = (props) => {
  return (
    <View style={{ backgroundColor: props.color }}>
      <Text style={styles.tile}>NEW COLOR TILE</Text>
    </View>
  );
};

export default ColorTile;

const styles = StyleSheet.create({
  tile: {
    width: 80,
    height: 80,
    // backgroundColor: "#1e1e1e",
    margin: 12,
  },
});
