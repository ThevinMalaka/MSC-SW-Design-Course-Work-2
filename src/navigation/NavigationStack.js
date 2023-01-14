import React, {useEffect, Fragment} from 'react';
import {Button, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {size} from '../utils/devices';
import Constants from '../lib/Constants';

import Login from '../features/login/containers';
// import Home from '../features/home/containers';
import Home from './nestingNavigator/UserDrawerNavigator';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: 'Home Screen',
          headerTintColor: Constants.BASICS.WHITE,
          headerStyle: {
            backgroundColor: Constants.BASICS.PRIMARY_COLOR,
            elevation: 2, // remove shadow on Android
            shadowOpacity: 2, // remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: size(16),
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}
