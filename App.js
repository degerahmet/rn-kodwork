import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Jobs from "./src/pages/Jobs";
import JobDetail from "./src/pages/JobDetail";
import FavoritedJobs from "./src/pages/FavoritedJobs";

import FavoriteProvider from './src/context/FavoriteProvider';



const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function JobStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoriteProvider>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={JobStack} />
        <Drawer.Screen name="Favorited" component={FavoritedJobs} />
      </Drawer.Navigator>
    </NavigationContainer>
    </FavoriteProvider>
  );
}
