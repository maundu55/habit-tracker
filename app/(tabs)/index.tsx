import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index (){
  return(
    <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    }}>

      <Text>Welcome to the Tabs Example!</Text>
      <Text>Navigate to the tabs below.</Text>
      <Link href='/login'>Login Page</Link>
    </View>
  )
}