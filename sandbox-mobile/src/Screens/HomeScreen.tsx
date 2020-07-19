import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Pink } from "../Constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ImageBackground } from "react-native";
import Digital from "../../assets";

export function HomeScreen() {
  // Keep reference to animation object
  const rotationAnimation = useRef(new Animated.Value(0)).current;

  // Create animation in useEffect() to prevent leaked animation instances
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotationAnimation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  const rotateData = rotationAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View style={styles.screen}>
      <Text style={styles.textTitle}>
        <Text>Welcome to </Text>
        <Text style={styles.textTitle}>EasyPiecy Systems Aps</Text>
        <Text style={styles.textBlue}>
          - One Stop Solution for Digital Products
        </Text>
      </Text>

      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.textBlue}>Inside</Text>
        </ImageBackground>

        <View style={styles.centerContainer}>
          <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
            <Ionicons name="ios-infinite" size={120} color={Pink} />
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
  },
  textBlue: {
    color: Pink,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
