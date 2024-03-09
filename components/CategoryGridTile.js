import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable android_ripple={{ color: "#FFFFFF" }} style={styles.button}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 8,
  },
  innerContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    alignContent: "center",
    paddingVertical: 50,
    color: "#000000",
  },
});

export default CategoryGridTile;
