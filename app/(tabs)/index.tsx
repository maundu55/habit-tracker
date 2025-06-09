import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index (){
  return(
    <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    }}>

      <Text>Welcome to the Home Page!</Text>
      <Text>Navigate to the tabs below.</Text>
      <Link href='/login'>Login Page</Link>
      <Link href='/explore'>Explore Page</Link>
    </View>
  )
}