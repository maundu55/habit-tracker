import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function explore(){
  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffff",
    }}>
      <Text>Welcome to Explore Page</Text>
      <Link href='/'>Go back to Home</Link>
      <Link href='/login'>Go to Login Page</Link>
    </View>
  )
}