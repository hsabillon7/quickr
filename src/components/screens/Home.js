import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Appbar, Button, FAB, Title } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Context as NoteContext } from "../../providers/NoteContext";
import NoteList from "../shared/NoteList";
import Toast from "react-native-toast-message";

const Home = ({ navigation }) => {
  const { state, signout } = useContext(AuthContext);
  const { state: noteState, getNotes, clearMessage } = useContext(NoteContext);

  useEffect(() => {
    getNotes(state.user.id);
  }, []);

  useEffect(() => {
    if (noteState.errorMessage) {
      Toast.show({
        text2: noteState.errorMessage,
      });
      clearMessage();
    }
  }, [noteState.errorMessage]);

  return (
    <>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View style={styles.container}>
        <Title style={styles.title}>Quickr</Title>
        <Appbar style={styles.appbar}>
          <Appbar.Action
            icon="logout"
            onPress={() => {
              signout();
            }}
          />
        </Appbar>
        <NoteList notes={noteState.notes} navigation={navigation} />
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {
          navigation.navigate("CreateNote");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    padding: 20,
  },
  appbar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 15,
  },
});

export default Home;
