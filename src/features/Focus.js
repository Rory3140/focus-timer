import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing, fontSizes } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.inputContainder}>
      <TextInput
        label="What would you like to focus on?"
        style={styles.textInput}
        onChangeText={setSubject}
      />
      <RoundedButton
        title="+"
        size={50}
        style={styles.button}
        onPress={() => {
          addSubject(subject);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: spacing.lg,
  },

  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },

  button: {
    marginLeft: spacing.sm,
  },

  text: {
    color: colors.offWhite,
    fontSize: fontSizes.lg,
  },
});
