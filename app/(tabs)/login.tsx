import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffff",
    }}>
      <Text>Login Page</Text>
      <Text>Welcome to the Login Page!</Text>
      <Link href="/">Go back to Home</Link>
    </View>
  );
}