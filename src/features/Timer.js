import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import { Countdown } from "../components/Countdown";
import { Timing } from "./Timing";
import { RoundedButton } from "../components/RoundedButton";

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [progress, setProgress] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(1);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
            setIsStarted(false);
          }}
        />
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          style={styles.ProgressBar}
          progress={progress}
          color={colors.sienaGold}
        />
      </View>
      <View style={styles.timeingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            onPress={() => setIsStarted(true)}
          ></RoundedButton>
        )}
        {isStarted && (
          <RoundedButton
            title="Pause"
            onPress={() => setIsStarted(false)}
          ></RoundedButton>
        )}
      </View>
      <View style={styles.focusFeaturesWrapper}>
        <Text style={styles.h1}>Focus Feature:</Text>
        <Text style={styles.text}>{focusSubject}</Text>
      </View>
      <View style={styles.removeButtonWrapper}>
        <RoundedButton
          title="X"
          size={50}
          onPress={() => clearSubject()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  countdownContainer: {
    padding: spacing.lg,
    margin: spacing.lg,
    backgroundColor: colors.sienaGreenLight,
    borderRadius: spacing.lg,
  },

  progressBarContainer: {
    paddingTop: spacing.md,
  },

  ProgressBar: {
    height: spacing.sm,
    borderRadius: spacing.sm,
  },

  timeingWrapper: {
    padding: spacing.md,
    justifyContent: "center",
  },

  buttonWrapper: {
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },

  focusFeaturesWrapper: {
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },

  removeButtonWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  h1: {
    color: colors.offWhite,
    fontSize: fontSizes.xl,
    fontWeight: "bold",
    marginTop: spacing.md,
  },

  text: {
    color: colors.offWhite,
    fontSize: fontSizes.lg,
    marginTop: spacing.md,
  },
});
