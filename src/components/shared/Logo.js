import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";

const { width, height } = Dimensions.get("screen");

const Logo = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={{ uri: require("../../../assets/quickr_logo.png") }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode: "contain",
  },
});

export default Logo;
