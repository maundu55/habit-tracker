import { Text, View } from "react-native";

export default function Index (){
  return(
    <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    }}>

      <Text>Welcome to the Tabs Example!</Text>
      <Text>Navigate to the tabs below.</Text>
    </View>
  )
}