import React, {useState} from "react";

import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import {Colors} from "../utils/Colors";

export const Focus = () => {
  return (
    <View>
      <Text style={styles.text}>Here We Are</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.offWhite,
    fontSize: 10,
  },
});
