import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Available from "./screens/available";
import Occupied from "./screens/occupied";
import Menu from "./screens/menu";
import Additional from "./screens/additional";


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Additional" component={Additional} />
        <Stack.Screen name="Available" component={Available} />
        <Stack.Screen name="Occupied" component={Occupied} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
