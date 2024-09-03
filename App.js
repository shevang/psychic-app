import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Homescreen from "./screens/home";
import resultscreen from "./screens/resultscreen";
import finalscreen from "./screens/finalscreen";
import showname from "./screens/showname";
const app = ()=>{
  return(
   <NavigationContainer>
   <Stack.Navigator initialRouteName="Homescreen" screenOptions={{
     headerShown:false
   }} >
   <Stack.Screen name="Homescreen" component={Homescreen}/>
   <Stack.Screen name = "resultscreen" component={resultscreen}/>
   <Stack.Screen name = "finalscreen" component={finalscreen}/>
   <Stack.Screen name = "showname" component={showname}/>




   </Stack.Navigator>
   </NavigationContainer>
  )
}


export default app