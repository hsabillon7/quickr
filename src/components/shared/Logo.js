import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import QuickrLogo from "../../../assets/quickr_logo.png";

const { width, height } = Dimensions.get("screen");

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={QuickrLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  logo: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode: "contain",
  },
});

export default Logo;
