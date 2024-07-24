import { NAVIGATION_PROP_TYPES } from "@/utils/types";
import * as React from "react";
import { View, Text, TextInput, Button } from "react-native";

const SubscribeScreen = ({ navigation }: NAVIGATION_PROP_TYPES) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    // Handle form submission here, e.g., send email to backend
    console.log("Submitting email:", email);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Subscribe to our Newsletter
      </Text>
      <TextInput
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          marginBottom: 20,
        }}
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Subscribe" onPress={handleSubmit} />
    </View>
  );
};

export default SubscribeScreen;
