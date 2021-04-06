import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Caption, IconButton, TextInput } from "react-native-paper";
import { format } from "date-fns";
import theme from "../../theme";
import { Context as NoteContext } from "../../providers/NoteContext";
import { Context as AuthContext } from "../../providers/AuthContext";

const ModifyNote = ({ navigation }) => {
  const { state: notesState, updateNote } = useContext(NoteContext);
  const { state } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [timestamp, setTimestamp] = useState(Date.now());
  const [content, setContent] = useState("");

  useEffect(() => {
    if (notesState.currentNote.id) {
      setTitle(notesState.currentNote.title);
      setContent(notesState.currentNote.content);
    }
  }, [notesState.currentNote]);

  const handleSaveNote = () => {
    updateNote(
      notesState.currentNote.id,
      title ? title : "New note",
      content,
      timestamp
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconBar}>
        <IconButton
          icon="close-circle-outline"
          color={theme.colors.primary}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <IconButton
          icon="check-circle-outline"
          color={theme.colors.primary}
          onPress={handleSaveNote}
        />
      </View>
      <TextInput
        mode="flat"
        placeholder="Title"
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
      />
      <Caption>{`${format(timestamp, "eee H:m")}, | ${
        content.length
      } characters`}</Caption>
      <TextInput
        multiline
        style={styles.contentInput}
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.backgroundWhite,
  },
  titleInput: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: theme.colors.backgroundWhite,
  },
  contentInput: {
    flex: 1,
    backgroundColor: theme.colors.backgroundWhite,
    borderBottomWidth: 0,
  },
  iconBar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default ModifyNote;
