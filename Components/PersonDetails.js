import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function PersonDetails({ bestbud, title }) {
  return (
    <View>
      <TouchableOpacity style={styles.titleCont}>
        <Image style={styles.image} source={require("../assets/album7.jpg")} />
        <Text style={styles.title}>
          {title.name} - {bestbud}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  titleCont: {
    marginBottom: 18,
  },
  title: {
    fontSize: 22,
    marginVertical: 8,
    textAlign: "center",
    backgroundColor: "#ccc",
    padding: 26,
    width: "100%",
  },
  image: {
    width: null,
    height: 300,
    resizeMode: "cover",
  },
});
