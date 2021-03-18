import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Appbar, Button, FAB, Title } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";

const Home = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        <Title style={styles.title}>Quickr</Title>
        <Appbar style={styles.appbar}></Appbar>
        <Button
          title="Signout"
          onPress={() => {
            signout();
          }}
        />
      </View>
      <FAB icon="plus" style={styles.fab} />
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
