import { validateEmail } from "@/utils";
import { NAVIGATION_PROP_TYPES } from "@/utils/types";
import * as React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

const SubscribeScreen = ({ navigation }: NAVIGATION_PROP_TYPES) => {
  const [email, setEmail] = React.useState<string>("");

  const showAlert = () => {
    Alert.alert("Thanks for subscribing, stay tuned!", "", [{ text: "OK" }]);
    setEmail("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo-grey.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.headerText} numberOfLines={2}>
        Subscribe to our Newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
      />
      <Pressable
        style={
          validateEmail(email)
            ? styles.button
            : { ...styles.button, backgroundColor: "#a9a9a9" }
        }
        disabled={validateEmail(email) ? false : true}
        onPress={showAlert}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 35,
  },
  modal: {},
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 140,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "500",
    width: "80%",
  },

  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#3e524b",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
