import React, {Fragment, useMemo} from 'react';
import {StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../../../../features/home/containers';
import Category from '../../../../features/category/containers';
import Budget from '../../../../features/budget/containers';
import Account from '../../../../features/account/containers';

const Tab = createMaterialBottomTabNavigator();

const HomeTabNavigator = props => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Tab.Navigator
        barStyle={{backgroundColor: '#1565c0'}}
        activeColor={'#fff'}
        inactiveColor={'#bfc2c5'}
        initialRouteName="Home">
        <Tab.Screen
          accessibilityLabel="Home"
          name="Home"
          component={Home}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.jumpTo('Home');
            },
            focus: e => {},
          })}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          accessibilityLabel="Category"
          name="Category"
          component={Category}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.jumpTo('Category');
            },
            focus: e => {},
          })}
          options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="category" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          accessibilityLabel="Budget"
          name="Budget"
          component={Budget}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.jumpTo('Budget');
            },
            focus: e => {},
          })}
          options={{
            tabBarLabel: 'Budget',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="attach-money" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          accessibilityLabel="Account"
          name="Account"
          component={Account}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.jumpTo('Account');
            },
            focus: e => {},
          })}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="account-circle" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
};

export default HomeTabNavigator;
