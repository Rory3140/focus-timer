import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import { Focus } from "./src/features/Focus";
import { Colors } from "./src/utils/Colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.forestGreen,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  text: {
    color: Colors.offWhite,
    fontSize: 30,
  },
});
