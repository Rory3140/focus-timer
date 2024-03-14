import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {

  const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus History:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },

  item: {
    color: colors.offWhite,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },

  title: {
    color: colors.offWhite,
    fontSize: fontSizes.lg,
    fontWeight: "bold",
  },
});
