import React, {useEffect, Fragment} from 'react';
import {Button, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {size} from '../utils/devices';
import Constants from '../lib/Constants';

import Login from '../features/login/containers';
// import Home from '../features/home/containers';
import Home from './nestingNavigator/UserDrawerNavigator';
import AddExpenses from '../features/home/containers/addExpenses';
import AddNewAccount from '../features/account/containers/addNewAccount';

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
      <Stack.Screen
        name="AddExpenses"
        component={AddExpenses}
        options={{
          headerShown: true,
          title: 'Add Transaction',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#1565c0',
            elevation: 2, // remove shadow on Android
            shadowOpacity: 2, // remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: size(16),
          },
        }}
      />
      <Stack.Screen
        name="AddNewAccount"
        component={AddNewAccount}
        options={{
          headerShown: true,
          title: 'Add New Account',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#1565c0',
            elevation: 2, // remove shadow on Android
            shadowOpacity: 2, // remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: size(16),
          },
        }}
      />
    </Stack.Navigator>
  );
}
