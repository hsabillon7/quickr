import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Alert = ({ type, title }) => {
  // Iconos
  // error --> error-outline #fdecea
  // warning --> warning #fff4e5
  // info --> info-outline #e8f4fd
  // success --> check-circle-outline #edf7ed
  let background = "";
  let icon = "";

  if (type === "error") {
    background = "#fdecea";
    icon = "times-circle";
  } else if (type === "warning") {
    background = "#fff4e5";
    icon = "warning";
  } else if (type === "info") {
    background = "#e8f4fd";
    icon = "info-circle";
  } else if (type === "success") {
    background = "#edf7ed";
    icon = "check-circle";
  }

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Icon name={icon} style={styles.icon} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
});

export default Alert;
