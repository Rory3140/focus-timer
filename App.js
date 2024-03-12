import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
} from "react-native";

import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { colors } from "./src/utils/colors";
import { fontSizes, spacing } from "./src/utils/sizes";

export default function App() {
  StatusBar.setBarStyle("light-content", true);
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sienaGreen,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
});
