import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
