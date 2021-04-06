import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Caption, Card, Paragraph } from "react-native-paper";
import { format } from "date-fns";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const Note = ({ title, content, timestamp }) => {
  return (
    <Card style={styles.container}>
      <Card.Title title={title} />
      <Card.Content style={styles.content}>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Caption style={styles.timestamp}>{`${format(
          timestamp,
          "eee H:m"
        )}`}</Caption>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.45,
    height: height * 0.2,
    margin: 5,
    // padding: 5,
  },
  content: {
    flex: 1,
  },
  actions: {
    justifyContent: "flex-end",
  },
  timestamp: {
    color: theme.colors.gray200,
  },
});

export default Note;
