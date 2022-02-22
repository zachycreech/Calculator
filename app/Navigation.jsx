import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Add from "./screens/Add/Add";
import Multiply from "./screens/Multiply/Multiply";
import Spotify from "./screens/Spotify/Spotify";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigaton() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Add">
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../assets/add.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            },
          }}
        />
        {/* {()=> (
            <Stack.Navigator>
                
            </Stack.Navigator>
        )} */}
        <Tab.Screen name="Multiply" component={Multiply} />
        <Tab.Screen name="Spotify" component={Spotify} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
