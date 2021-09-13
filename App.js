import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import SpaceCraftScreen from "./screens/SpaceCraft";
import StarMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
         <Stack.Screen name="DailyPic" component={DailyPicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;