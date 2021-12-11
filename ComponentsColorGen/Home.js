import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ColorTile from "./ColorTile";
// export default function Home() {
//   return (
//     <View>
//       <Text>COLOR GEN APP</Text>;
//     </View>
//   );
// }
// const styles = StyleSheet.create({});
// import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  var [cont, setCont] = useState(0);
  var [colorArr, setColorArr] = useState([]);
  var col = "#";
  for (var i = 0; i < 3; i++) {
    col += (Math.random() * 9).toFixed(0);
  }
  console.log(col);
  return (
    <View style={styles.mainContainer}>
      <Button
        onPress={() => {
          setCont(++cont);
        }}
        title="Press To Genenrate Color"
      />
      <Text style={{ fontSize: 36 }}>{cont}</Text>
      <View style={styles.tileContainer}>
        <TouchableOpacity>
          <ColorTile color={col} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: "#eee",
    alignItems: "center",
  },
  tileContainer: {
    flex: 1,
  },
});
