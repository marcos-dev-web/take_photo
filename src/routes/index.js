import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import TakePhoto from '../pages/TakePhoto';
import ShowPhoto from '../pages/ShowPhoto';

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TakePhoto" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TakePhoto" component={TakePhoto} />
        <Stack.Screen name="ShowPhoto" component={ShowPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}