import { NAVIGATION_PROP_TYPES } from "@/utils/types";
import * as React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }: NAVIGATION_PROP_TYPES) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.description} numberOfLines={2}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Subscribe")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    display: "flex",
    gap: 70,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 112,
    height: 200,
    marginBottom: 10,
  },

  description: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
    width: "65%",
  },
  button: {
    backgroundColor: "#3e524b",
    padding: 15,
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
    width: "88%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
