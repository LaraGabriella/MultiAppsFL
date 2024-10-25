import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import IMCScreen from '../screen/IMCScreen';
import CMEScreen from '../screen/CMEScreen';
import CMOScreen from '../screen/CMOScreen';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IMC" component={IMCScreen} />
      <Stack.Screen name="Medida" component={CMEScreen} />
      <Stack.Screen name="Moeda" component={CMOScreen}
       />
    </Stack.Navigator>
  );
}