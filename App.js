import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#FFFFFF",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
