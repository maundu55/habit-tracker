import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';

export default function TabsLayout(){
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'coral'}}>
      
      <Tabs.Screen name='index' options={{ title: 'Home', tabBarIcon: ({color})=>(<FontAwesome5 name='home' size={20} color={color} />) }} />
      <Tabs.Screen name='explore' options={{ title: 'Explore' }} />
      <Tabs.Screen name='login' options={{ title: 'Login' }} />
    </Tabs>
  )
}